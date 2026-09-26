# AnRo

Landing de productos con Angular 21 LTS, pnpm y Tailwind CSS 4. Catálogo con carrito persistente en el navegador y pedidos por WhatsApp.

## Desarrollo

```bash
pnpm install
pnpm start
pnpm build
pnpm typecheck
```

Copiá `.env.example` a `.env` y cambiá `NG_APP_WHATSAPP_NUMBER` por el número comercial en formato internacional (solo dígitos, sin `+`). `@ngx-env/builder` lee `.env` al ejecutar `pnpm start` o `pnpm build`, sin scripts propios ni archivos de configuración generados. Si no existe, se utiliza **15555550100**, un número ficticio para pruebas. El número es público: queda incluido en el sitio generado. Reiniciá el servidor al editar `.env`.

## Contenido

- `src/app/core/data/products.ts`: productos, precios en ARS y una o más fotos por producto. Las cards muestran controles para recorrerlas cuando hay varias.
- `src/app/core/models/*.model.ts`: modelo de producto y enums de entrega.
- `src/app/core/pipes/delivery-method-es.pipe.ts`: nombres de entrega en español.
- `src/app/core/services/cart.service.ts`: carrito persistente con `localStorage`.
- `src/app/features/landing/data/decorations.ts`: ilustraciones florales; se reparten en orden aleatorio entre las cards en cada carga.
- `src/app/features/landing/services/order-message.ts`: mensaje de pedido y enlace a WhatsApp.
- `src/app/features/landing/components/`: cards y carrito; templates separados en `.html`.
- `src/app/features/landing/pages/home/`: secciones de la landing.
- `src/app/routes/`: rutas y `LINKS` con builders de URL.
- `public/assets/products/`: fotos originales de los productos. `producto_2_1.jpeg` y `producto_2_2.jpeg` son dos fotos del producto 2; agregá otras en `images` dentro de los datos.
- `public/assets/decor/`: ilustraciones decorativas, incluidas las que antes se usaban como imágenes de producto. También podés guardar acá `gerbera-frontal.png`, `gerbera-izq.png`, `gerbera-tallo-frontal.png`, etc. Actualizá `DECORATION_ASSETS` en `data/decorations.ts` al sumar variantes.

Los precios y nombres son de ejemplo. El carrito muestra el **subtotal de productos**; el envío se cotiza por WhatsApp según la zona y no se suma antes de confirmarlo. El retiro se coordina por chat.
