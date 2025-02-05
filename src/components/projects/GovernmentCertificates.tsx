
import cc01 from "../../assets/projects/certificates/cc01.webp"
import cc02 from "../../assets/projects/certificates/cc02.webp"
import cc03 from "../../assets/projects/certificates/cc03.webp"
import cc04 from "../../assets/projects/certificates/cc04.webp"
import cc05 from "../../assets/projects/certificates/cc05.webp"
import cc06 from "../../assets/projects/certificates/cc06.webp"
import cc07 from "../../assets/projects/certificates/cc07.webp"
import cc08 from "../../assets/projects/certificates/cc08.webp"
import cc09 from "../../assets/projects/certificates/cc09.webp"
import cc10 from "../../assets/projects/certificates/cc10.webp"
import cc11 from "../../assets/projects/certificates/cc11.webp"
import cc12 from "../../assets/projects/certificates/cc12.webp"
import cc13 from "../../assets/projects/certificates/cc13.webp"
import cc14 from "../../assets/projects/certificates/cc14.webp"
import cc15 from "../../assets/projects/certificates/cc15.webp"
import cc16 from "../../assets/projects/certificates/cc16.webp"
import cc17 from "../../assets/projects/certificates/cc17.webp"
import cc18 from "../../assets/projects/certificates/cc18.webp"
import cc19 from "../../assets/projects/certificates/cc19.webp"
import cc20 from "../../assets/projects/certificates/cc20.webp"
import { useState } from "react"

// This array would contain your actual certificate image paths
const certificateImages = [cc01, cc02, cc03, cc04, cc05, cc06, cc07, cc08, cc09, cc10, cc11, cc12, cc13, cc14, cc15, cc16, cc17, cc18, cc19, cc20]
export default function GovernmentCertificates() {
    const [visibleImages, setVisibleImages] = useState(12)

    const loadMore = () => {
        setVisibleImages((prevVisible) => Math.min(prevVisible + 12, certificateImages.length))
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Government Certifications</h2>
                <p className="text-center text-gray-600 mb-12">
                    Our work is backed by numerous government certifications, demonstrating our commitment to quality and
                    compliance.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {certificateImages.slice(0, visibleImages).map((src, index) => (
                        <div key={index} className="aspect-w-3 aspect-h-4 bg-white rounded-lg shadow-md overflow-hidden">


                            <img
                                src={src || "/placeholder.svg"}
                                alt={`Government Certificate ${index + 1}`}
                                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                                loading="lazy"
                            />

                        </div>
                    ))}
                </div>
                {visibleImages < certificateImages.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={loadMore}
                            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

