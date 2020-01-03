<template>
	<div>
		<v-layout row wrap class="draggable-layout">
			<template v-for="(details,index) in products">
					<app-card
							:id="index"
							colClasses="xl4 lg4 md4 sm4 xs12"
					>
						<v-layout row wrap contact-item-info>
							<v-flex lg12 md12 sm-12 xs-12 text-center>
								<div class="tab-image">
									<img :src="details.thumbnail" :key="details.thumbnail" style="width: 100%;"/>
									<div>
										<ul class="custome_product_list d-flex align-items-center pl-0">
											<li  v-for="(item,i) in details.skus" @click="selectProductBySku(details,item.sku_id)" :class="details.selectedColor == item.color_value ? 'active' : ''"
											>
												<p :style="{background:item.color_value}"></p>
											</li>
										</ul>
									</div>
									<template v-if="currentPage == 'shop'">
										<v-btn fab dark small color="primary" class="shoppingCart-btn mt-2">
											<v-icon dark>shopping_cart</v-icon>
										</v-btn>
									</template>
									<template v-if="currentPage == 'edit-product'">
										<v-icon dark class="delete-btn" @click="deleteDialog(details)">delete</v-icon>
										<v-btn fab dark small
											   color="primary"
											   class="edit-btn"
											   :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/edit-detail/'+ details.material +'/'+ details.product_id}`"
										>
											<v-icon dark>edit</v-icon>
										</v-btn>
									</template>
								</div>
							</v-flex>
							<v-flex xs12 lg12 md12 sm-12 pt-0>
								<h4 class="mb-3">{{ details.name }}</h4>
								<span class="fs-14 d-inline-flex">
										<span class="primary--text text-center">${{ details.price }}</span>
									</span>
							</v-flex>
						</v-layout>
					</app-card>
				</template>
		</v-layout>
		<delete-confirmation-dialog
				ref="deleteConfirmationDialog"
				heading="Are You Sure You Want To Delete?"
				message="Are you sure you want to delete this Product permanently?"
				@onConfirm="DeleteProduct"
		>
		</delete-confirmation-dialog>
	</div>
</template>
<script>
  import { getCurrentAppLayout } from "Helpers/helpers";
  import draggable from "vuedraggable";
  export default{
    props:['productsData'],
    data(){
      return{
        products: this.productsData,
        currentPage: '',
        selectItemToDelete:'',
        open:false,
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: false,
        centered: false,
        grow: false,
        vertical: false,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 3,

      }
    },
    components: {
      draggable
    },
    created(){
      var currentRoute = this.$route.path
      var splitRoute = currentRoute.split("/");
      this.currentPage = splitRoute[3];
    },
    methods:{

      onColorOrderChange(){
        // Color order sequence change update full product list.
        this.products.forEach(function(item, index){
          item.skus.forEach(function(skuItem, colorIndex){
            skuItem.tag_position=colorIndex + 1;
          });
        });
        this.$emit('productListChange',this.products);
      },
      deleteDialog(item){
        this.$refs.deleteConfirmationDialog.openDialog();
        this.selectItemToDelete = item;
      },
      openDialog(){
        this.open = true;
      },
      close(){
        this.open = false;
      },
      getCurrentAppLayoutHandler() {
        return getCurrentAppLayout(this.$router);
      },
      selectProductBySku(selectedProduct,skuId){
        var vm=this;
        this.products.forEach(function(item, index){
          if(item.product_id==selectedProduct.product_id){
            item.skus.forEach(function(skuItem, skuIndex){
              if(skuItem.sku_id==skuId){
                vm.products[index].thumbnail=skuItem.thumbnail;
              }
            });
          }
        });
        var elements = document.querySelectorAll(".custome_product_list li");
        for (var i = 0; i < elements.length; i++) {
          elements[i].addEventListener("click", function(e) {
            this.parentElement.querySelectorAll( "li" ).forEach( elem =>
              elem.classList.remove( "active" )
            );
            this.classList.add( "active" );
          });
        }
      }
    }
  }
</script>
<style scoped>
    .draggable-layout{
        width: 100%;
    }
	.delete-btn{
		position: absolute;
		margin-left: -40px;
		margin-top: 10px;
		cursor: pointer;
	}
	.edit-btn{
		position: absolute;
		margin-left: -48px;
		margin-top: 40px;
	}
	.shoppingCart-btn{
		position: absolute;
		margin-left: -48px;
	}
	.tab-image .v-tab{
		display: block;
		-webkit-box-flex: 0;
		flex: none;     min-width: 31px;
		max-width: 35px;
		outline: none;
		padding: 0 4px;
	}
	.tab-dot {
		border-radius: 100px!important;
	}
	.v-tab p{
		margin: 3px;
		border-radius: 100px!important;
		border: 1px solid #b3b0b0;
	}
	.v-tab--active .tab-dot {
		border: 1px solid #000!important;
	}
	.tab-image .v-tabs-slider-wrapper{
		display: none!important;
	}
	.tab-image .v-slide-group__content{
		flex: none!important;
	}
	.tab-image .shoppingCart-btn {
		top: 12px !important;
		right: 12px !important;
	}
	.custome_radio .v-input--selection-controls__input{
		width: 24px !important;
		height: 24px !important;
	}
	.custome_radio  .v-icon.v-icon{
		font-size: 23px !important;
	}
	.custome_product_list{
		justify-content: center;
	}
	.custome_product_list li p {
		width: 100%;
		height: 100%;
		border-radius: 100px;
		display: block;
		cursor: pointer;
		box-shadow: 0 0 5px rgba(0,0,0,0.5);
	}
	.custome_product_list li + li {
		margin-left: 12px;
	}
	.custome_product_list li{padding: 4px;width: 23px; display: block;
		height: 23px;
		border-radius: 100px;}
	.custome_product_list li.active {
		border: 1px solid #000;

	}
</style>