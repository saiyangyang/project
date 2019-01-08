import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import Share from "@/components/Share"
import Happen from "@/components/Happen"
import Recommend from "@/components/Recommend"
import Logind from "@/components/Logind"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'Logind',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      	{
      		path:"/logind",
      		component:Logind
      	},
      	{
      		path:"/home",
		    	component:Home
      	},
      	{
      		path:"/recommend",
      		component:Recommend
      	},
      	{
      		path:"/happen",
      		component:Happen
      	},
      	{
      		path:"/share",
      		component:Share
      	}
      
      
      ]
      
    },
    
   
  
  ]
})
