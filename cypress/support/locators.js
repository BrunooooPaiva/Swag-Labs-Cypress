const locators = {
     LOGIN: {
          USERNAME: '[data-test="username"]',
          PASSWORD: '[data-test="password"]',
          BTN_LOGIN: '#login-button'
     },
     PRODUTOS: {
          NOME_INVENTARIO: '.inventory_item_name',
          ITEM_INVENTARIO: '.inventory_item',
          SELECT: '.product_sort_container'
     },
     PAG_CARRINHO: {
          NOME_INVENTARIO: '.inventory_item_name',
          BTN_CHECKOUT: '.btn_action'
     },
     CHECKOUT: {
          FIRST_NAME: '[data-test="firstName"]',
          LAST_NAME: '[data-test="lastName"]',
          POSTAL_CODE: '[data-test="postalCode"]',
          BTN_CONTUE: '.btn_primary',
          BTN_CANCEL: '.cart_cancel_link',
          BTN_FINISH: '.btn_action',
          TITULO: '.complete-header'
     },
     CARRINHO: '.shopping_cart_link',
     PAGINA: '.subheader',
     RESET_APP: '#reset_sidebar_link',
     MENU_HAMB: '.bm-burger-button > button'
}


export default locators;