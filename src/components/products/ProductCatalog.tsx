import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getProductsByCategory, groupBySubCategory, type ProductCategory } from '@/data/products';

interface ProductCatalogProps {
  category: ProductCategory;
  title?: string;
}

const ProductCatalog = ({ category, title = 'Product Range' }: ProductCatalogProps) => {
  const items = getProductsByCategory(category);
  const grouped = groupBySubCategory(items);
  const sections = Object.entries(grouped);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">{title}</h2>

        <div className="space-y-12">
          {sections.map(([subCategory, rows]) => (
            <div key={subCategory || 'default'}>
              {subCategory && (
                <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-4">
                  {subCategory}
                </h3>
              )}

              <div className="bg-card rounded-2xl border border-border overflow-hidden card-shadow">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary hover:bg-secondary">
                      <TableHead className="font-heading font-bold text-foreground w-[28%]">Grade</TableHead>
                      <TableHead className="font-heading font-bold text-foreground w-[32%]">Application</TableHead>
                      <TableHead className="font-heading font-bold text-foreground">Available Packs</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((p) => (
                      <TableRow key={p.grade}>
                        <TableCell className="font-semibold text-foreground align-top">{p.grade}</TableCell>
                        <TableCell className="text-muted-foreground align-top">{p.application}</TableCell>
                        <TableCell className="align-top">
                          <div className="flex flex-wrap gap-1.5">
                            {p.packs.map((pack) => (
                              <span
                                key={pack}
                                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20"
                              >
                                {pack}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          For pricing and bulk inquiries, please contact our sales team.
        </p>
      </div>
    </section>
  );
};

export default ProductCatalog;