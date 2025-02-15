import "@/assets/styles.css";
import Data from "@/utils/top.json";

export default function DataTable() {
    return(
        <div className="main-container">
            <h1>Top product</h1>
            <table>
                <tbody>
                    {Data.top_products.map((product, index) => (
                    <tr key={index}>
                        <td>
                            <img src={product.image} alt="product-img"/>
                        </td>
                        <td>
                            <h4>{product.name}</h4>
                            <span className="sold-span">Sold:{product.sold}</span>
                        </td>
                        <td className="align-right">
                            <span className={`growth-span ${product.growth_type === "positive" ? "positive" : "negative"  }`}>{product.growth_type === "positive" ? "+" + product.growth : product.growth}%</span>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}