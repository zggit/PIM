import Full from 'Container/Full'

//Ecommerce Widgets
const Shop = () => import('Views/ecommerce/Shop');

export default {
   path: '/',
   component: Full,
   redirect: '/default/ecommerce/shop',
   children: [
      {
         path: '/default/ecommerce/shop',
         component: Shop,
         meta: {
            requiresAuth: true,
            title: 'message.shop',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Shop'
              }
            ]
         }
      }    
   ]
}
