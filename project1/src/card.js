import React from "react";
import './index.css'

const Product = function(props){
    return(
        <div>
            <section className="card">
                <a>
                    <img src={props.image} alt="Product Image here"/>
                </a>

                <div className="content">
                    <a className="author">{props.name}</a>
                </div>

                <div className="metadata">
                    $<span className="date">{props.price}</span>
                </div>

                <div className="comment">
                    "{props.summary}"
                </div>
            </section>
        </div>
    )
}

export default Product;