import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails"
import { useEffect, useState } from "react";
import { endpointHost } from "../../Functions";

export default function DetailSection(){



    return (
        <section className="product-section d-flex justify-content-center align-items-center detail-section">
            <ProductDetails/>
        </section>
    );
}