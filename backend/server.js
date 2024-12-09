import express from'express'
import cors from'cors'
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Hardcoded response for testing 
//https://www.myntra.com/gateway/v2/product/31602544/offers/28661
app.get('/offers', (req, res) => {
    res.json({
        bestPrice: {
            couponCode: "SAVE50",
            couponDiscount: "50%",
            price: { mrp: 1000, discounted: 500 },
            applicableOn: "Electronics",
        },
        bestPriceList: [
            {
                couponCode: "SAVE30",
                couponDiscount: "30%",
                price: { mrp: 2000, discounted: 1400 },
                applicableOn: "Appliances",
            },
            {
                couponCode: "SAVE20",
                couponDiscount: "20%",
                price: { mrp: 1500, discounted: 1200 },
                applicableOn: "Books",
            },
        ],
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
