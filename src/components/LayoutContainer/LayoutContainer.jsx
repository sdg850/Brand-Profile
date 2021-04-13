import React from 'react'
import { Layout } from 'antd';
import FooterContent from './FooterContent/FooterContent'
import LayoutContent from "./LayoutContent/LayoutContent";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutReviews from './LayoutReviews/LayoutReviews'
import LayoutOverviews from './LayoutOverviews/LayoutOverviews'
import LayoutRoutes from './LayoutRoutes/LayoutRoutes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




export default function LayoutContainer() {
	return (

		<Layout >
			<LayoutHeader />
			<Router>
				<LayoutRoutes />
				<Switch>
					<Route exact path='/Products' component={LayoutContent} />
					<Route exact path='/Reviews' component={LayoutReviews} />
					<Route exact path='/Overviews' component={LayoutOverviews} />
				</Switch>
			</Router>
			<FooterContent />
		</Layout>
	)
}




