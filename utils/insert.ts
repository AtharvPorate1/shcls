import { prisma } from "./db";



// // Example usage:
// const hospitalsData = [
//   {
//     Name: "Prudent International Health Clinics",
//     Area: "Kalyani Nagar-Vadgaon Sheri",
//     Address: "Above Bank Of Maharashtra Kalyani Nagar Vadgaon Sheri",
//     Phone: 9035149979,
//     Rating: 4.1,
//     Review: null,
//     TotalReviews: "657",
//     Thumbnail: "https://content.jdmagicbox.com/comp/pune/k4/020pxx20.xx20.151006165856.b5k4/catalogue/prudent-international-health-clinics-kalyani-nagar-pune-dermatologists-2cj8ip5-250.jpg?clr=#660000",
//     OpeningTime: "Open 24 Hrs",
//     Verified: "Yes",
//   },
//   {
//     Name: "Dr.Shreeniwas S.Raut MBBS MD Medicine DM Oncologist",
//     Area: "Ambegaon Road Ambegaon Budruk",
//     Address: "Behind Ambegaon D Mart Ambegaon Budruk",
//     Phone: 9035265518,
//     Rating: 4.6,
//     Review: "Wonderful hospital with top-class doctors and nursing staff...",
//     TotalReviews: "145",
//     Thumbnail: "https://content.jdmagicbox.com/comp/pune/u1/020pxx20.xx20.170620191443.u1u1/catalogue/dr-shreeniwas-s-raut-mbbs-md-medicine-dm-oncologist-ambegaon-road-pune-oncologists-1dz27ps.jpg",
//     OpeningTime: "10:00 am - 7:00 pm",
//     Verified: "Yes",
//   },
// ];

// saveHospitalsData(hospitalsData);
export  const saveHospitalsData = async (hospitalsData: any) => {
    for (const hospital of hospitalsData) {
        await prisma.hospitals.create({
        data: {
            
            name: hospital.Name,
            Category: "ENT",
            Area: hospital.Area,
            Address: hospital.Address,
            phone: hospital.Phone.toString(),
            Rating: hospital.Rating,
            // Reviews: hospital.Review || "",
            TotalReviews: parseInt(hospital.TotalReviews),
            ThumbNail: hospital.Thumbnail,
            OpeningTime: hospital.OpeningTime,
            Verified: hospital.Verified ? true : false,
        },
        });
    }
    }