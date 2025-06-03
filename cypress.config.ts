import { defineConfig } from 'cypress';
import xlsx from 'xlsx';
import fs from 'fs';

export default defineConfig({
  e2e: {
    baseUrl: 'https://example.com',
    specPattern: 'cypress/e2e/**/*.cy.{ts,js}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on) {
      const workbookPath = './a11y-report.xlsx';
      on('task', {
        log(message: string) {
          console.log(message);
          return null;
        },
        writeA11ySheet({ pageName, violations }) {
          let workbook;

          try {
            const file = xlsx.readFile(workbookPath);
            workbook = file;
          } catch {
            workbook = xlsx.utils.book_new();
          }

          const rows = [
            ['Violation', 'Description', 'Impact', 'Help URL', 'Selectors'],
            ...violations.map(v => [
              v.id,
              v.description,
              v.impact,
              v.helpUrl,
              v.nodes.map(n => n.target.join(', ')).join('\n')
            ])
          ];

          const sheet = xlsx.utils.aoa_to_sheet(rows);
          xlsx.utils.book_append_sheet(workbook, sheet, pageName.slice(0, 31));
          xlsx.writeFile(workbook, workbookPath);

          return null;
        }
      });
    },
  },
});
