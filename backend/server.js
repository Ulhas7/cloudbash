import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Hardcoded response for testing 
//https://www.myntra.com/gateway/v2/product/31602544/offers/28661
//https://www.myntra.com/gateway/v2/product/31602544/related
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
        related: [
            {
                type: "Similar",
                product: {
                    articleAttributes: {
                        "Ankle Height": "Regular",
                        "Fastening": "Lace-Ups",
                        "Material": "Synthetic",
                        "Pattern": "Solid",
                        "Sole Material": "TPR",
                        "Sustainable": "Regular",
                        "Toe Shape": "Round Toe",
                        "Type": "Derbys",
                        "Warranty": "3 months",
                    },
                    brand: {
                        name: "Killer"
                    },
                    baseColour: "Black",
                    analytics: {
                        gender: "Men",
                        articleType: "Formal Shoes"
                    },
                    defaultImage: {
                        secureSrc: "https://assets.myntassets.com/h_($height),q_($qualityPercentage),w_($width)/v1/assets/images/2024/NOVEMBER/12/xkH5Ja11_3a086b2b96a544fa9ae27e52484d81a3.jpg"
                    }
                },
                products: [
                    {
                        id: 31575389,
                        name: "FOXYFOOT Men Leather Formal Oxford Shoes",
                        price: {
                            mrp: 4999,
                            discounted: 1399,
                            discount: {
                                label: "(72% OFF)",
                                labelType: "Flat_Search_Percent"
                            }
                        },
                        brand: {
                            name: "FOXYFOOT"
                        },
                        defaultImage: {
                            secureSrc: "https://assets.myntassets.com/h_($height),q_($qualityPercentage),w_($width)/v1/assets/images/2024/NOVEMBER/8/nl4XBJKj_df8569ade5744906b411fb3638d65169.jpg"
                        },
                        info: "Men Leather Formal Oxfords",
                        baseColour: "Black",
                        landingPageUrl: "Formal-Shoes/FOXYFOOT/FOXYFOOT-Men-Leather-Formal-Oxford-Shoes/31575389/buy"
                    },
                    {
                        id: 31568597,
                        name: "Carlton London Men Formal Derbys",
                        price: {
                            mrp: 5995,
                            discounted: 4196,
                            discount: {
                                label: "(30% OFF)",
                                labelType: "Flat_Search_Percent"
                            }
                        },
                        brand: {
                            name: "Carlton London"
                        },
                        defaultImage: {
                            secureSrc: "https://assets.myntassets.com/h_($height),q_($qualityPercentage),w_($width)/v1/assets/images/2024/NOVEMBER/12/xkH5Ja11_3a086b2b96a544fa9ae27e52484d81a3.jpg"
                        },
                        info: "Men Leather Formal Derbys",
                        baseColour: "Black",
                        landingPageUrl: "Formal-Shoes/CarltonLondon/CarltonLondon-Men-Formal-Derbys/31568597/buy"
                    }
                ]
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
