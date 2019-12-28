<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container fluid pt-0 grid-list-xl>
			<!-- search box -->
         <v-layout row wrap align-items-center search-wrap>
            <v-flex xs12 sm12 md12 lg12  align-items-center pt-0>
               <app-card
                  customClasses="mb-0 py-12"
               >
                  <v-layout row wrap >
                     <v-flex xs12 sm12 md12 lg3 align-items-center>
								<h2 class="mb-0">Search</h2>
                     </v-flex>      
                     <v-flex xs12 sm12 md12 lg9 pb-0> 
                        <div class="d-flex search-field-wrap">   
                           <div class="w-75">
                              <v-text-field 
                                 class=" pt-0 pr-4"
                                 label="Search Projects"
                                 >
                              </v-text-field>
                           </div>
                           <div>
                              <v-btn color="primary" class="my-0 ml-0 mr-2" medium>Search</v-btn>
                           </div>
                        </div>
                     </v-flex>
                   </v-layout>
               </app-card>
            </v-flex>   
         </v-layout>
         <!-- Actions -->
            <v-layout wrap class="pa-3 align-items-center justify-space-between">
				<div class="title">
					<h3 class="mb-0">{{$t('message'+'.'+viewType)}}</h3>
				</div>
          	</v-layout>
			<div class="d-md-inline-flex mb-5">
				<v-select :items="type" label="Type" class="mr-md-5"></v-select>
				<v-select :items="recent" label="Recent" class="mr-md-5"></v-select>
				<v-select :items="noOfItems" label="No of Items"></v-select>
			</div>
            <div class="d-md-inline-flex mb-4 save-btn">
                <v-btn color="primary" class="my-0 ml-0 mr-2" @click="saveProductList" medium>Save List</v-btn>
            </div>
         <!-- grid view			 -->
          <div v-show="selectedView == 'grid'">
               <products  :productsData="productsData"  @productListChange="productListChange" ></products>
			</div> 
		</v-container>
	</div>
</template>
<script>
    import Vue from 'vue'
	import Products from 'Components/Widgets/Products'
    import Productslist from 'Components/Widgets/ProductsList'
    //	import { productsData } from 'Views/ecommerce/data.js'
    import axios from 'axios';

	export default {
		components: {
     	  Products,
          Productslist  
	   },
	  data() {
	    return {
         productsData:[],
         type: ['Men', 'Women', 'Gadgets', 'Accessories'],
         recent:['This Week', 'This Month', 'Past Month'],
         noOfItems: ['10', '20', '30'],
         viewType: "projectGrid",
         selectedView: "grid",
         isActive: 'grid'
	    };
	  },
      mounted() {
	    this.getProductList();
	  },
      methods:{
        getProductList() {
            const vm = this;
            axios.post( 'https://beta3.payneglasses.com:450/webyiiapi/tag/list-tag-product.html',
            {
                "token": "1234",
                "page": "0",
                "pagecount": "10",
                "condition": {
                  "tag":"5.95"
                },
            }).then(function (response) {
                for (var i = 0; i < response.data.products.length; i++) {
                  response.data.products[i].selectedColor=response.data.products[i].skus[0].color_value;
                  response.data.products[i].color=response.data.products[i].skus[0].color_value;
                  vm.productsData.push(response.data.products[i]);
                }
            })
             .catch(function (error){
                alert(error);

            });
        },
        saveProductList() {
          const vm = this;
          axios.post( 'https://beta3.payneglasses.com:450/webyiiapi/tag/post-tag-list.html',
            {
              "token": "1234",
              "products":vm.productsData
            }).then(function (response) {

            Vue.notify({
              group: 'loggedIn',
              type: 'success',
              text: 'Product list save successfully!'
            });

          })
           .catch(function (error){
              alert(error);
            });
        },
        productListChange: function (products) {
          this.productsData = products;
        },

        listView(){
          this.viewType = "projectList";
          this.selectedView = "list";
          this.isActive = 'list';
        },
        girdView(){
          this.viewType = "projectGrid";
          this.selectedView = "grid";
          this.isActive = "grid";
        },
     }
	}
</script>
<style scoped>
.save-btn{text-align: right;float: right;}
</style>