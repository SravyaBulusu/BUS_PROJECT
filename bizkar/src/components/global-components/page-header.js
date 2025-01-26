import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle
        let Img = this.props.Img ? this.props.Img :'page-header-bg-1-1.png'

        return (
			<section className="page-header" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/'+Img+')'}}>
				  <div className="container">
				    <h2>{ HeaderTitle }</h2>
				    <ul className="list-unstyled thm-breadcrumb">
				      <li style={{color:"#1F3252"}}><a href="/demo/react/bizkar#/home-v5" style={{color:"#1F3252"}}>Home</a></li>
				      <li><span>{ Subheader }</span></li>
				    </ul>{/* /.list-unstyled thm-breadcrumb */}
				  </div>{/* /.container */}
			</section>

        )
    }
}


export default Page_header