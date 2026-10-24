# AT Sports Product Submittals

General product submittal packages that sales reps personalize and send to customers.
Built from the USTA National Campus submittal design.

## Pages

| Route | What it is |
|---|---|
| `/` | Submittal builder. The rep picks a product and enters project and contact details. |
| `/acrytech` | Acrytech Coatings System submittal |
| `/cushionx` | CushionX Cushion Surface System submittal |

Project details are passed in the URL (`/acrytech?project=...&repName=...`), so a personalized
link can be bookmarked or shared. **Download PDF** opens the browser print dialog. Choose
*Save as PDF*, margins *None* and turn on *Background graphics*.

## How it's organized

- `lib/submittal.ts`: product config (names, cover title, appendix list) and the project form fields
- `components/submittal/document.tsx`: **page order for each product**. Add, remove or reorder pages here.
  Page numbers, the page total and the Contents list update automatically.
- `components/submittal/front.tsx`: cover, transmittal and contents, intro letter, "Why" page, closing/contact
- `components/submittal/product-pages.tsx`: Acrytech coverage page, CushionX system and performance pages
- `components/proposal/*`: shared pages carried over from the USTA submittal (company, testing, case studies, warranty, appendices)

Amber **Content Required** / **To Confirm** tags mark content still awaiting source documents. They
show on screen and in print, so clear them before sending.
