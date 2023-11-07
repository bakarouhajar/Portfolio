import React from "react";
import C1 from '../pictures/C1 RKXQAPWMVQL2_page-0001.jpg';
import C2 from '../pictures/C2 VT7J2VKV8BTN_page-0001.jpg';
import C3 from '../pictures/C3 8BAAZN88HQX6_page-0001.jpg';
import C4 from '../pictures/C4 JAFQJLPFD96P_page-0001.jpg';
import C5 from '../pictures/C5 LBNSUS3942J4_page-0001.jpg';
import C6 from '../pictures/C6 D5F5WK2HVMDR_page-0001.jpg';
import C7 from '../pictures/C7 GGAUJCD2UH2U_page-0001.jpg';
import C8 from '../pictures/C8 ATCNVSVNLN3X_page-0001.jpg';
import C9 from '../pictures/C9 GNBQLQ4N8WMX_page-0001.jpg';
import C10 from '../pictures/C10 TV4XQMXYNKBY_page-0001.jpg';

function Certifications() {
    const certificationsData = [
        {
            img: C9,
            title: "Full-Stack Web Development with React",
            institution: "IBM",
            date: "December 26, 2022",
        },
        {
            img: C2,
            title: "Introduction to Agile Development and Scrum",
            institution: "IBM",
            date: "March 18, 2023",
        },
        {
            img: C1,
            title: "Introduction to DevOps",
            institution: "IBM",
            date: "March 18, 2023",
        },
        {
            img: C6,
            title: "Introduction to Cloud Computing",
            institution: "IBM",
            date: "March 18, 2023",
        },
        {
            img: C10,
            title: "DevOps, Cloud, and Agile Foundations",
            institution: "IBM",
            date: "March 18, 2023",
        },
        {
            img: C3,
            title: "Server-side Development with NodeJS, Express and MongoDB",
            institution: "THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
            date: "December 26, 2022",
        },
        {
            img: C7,
            title: "Front-End Web Development with React",
            institution: "THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
            date: "December 26, 2022",
        },
        {
            img: C4,
            title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            institution: "THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
            date: "December 26, 2022",
        },
        {
            img: C8,
            title: "Python Functions, Files, and Dictionaries",
            institution: "UNIVERSITY OF MICHIGAN",
            date: "May 13, 2022",
        },
        {
            img: C5,
            title: "Data Collection and Processing with Python",
            institution: "UNIVERSITY OF MICHIGAN",
            date: "May 10, 2022",
        },
    ];

    const specializations = [
        {
            img: C9,
            title: "Full-Stack Web Development with React",
            institution: "IBM",
            date: "December 26, 2022",
        },
        {
            img: C10,
            title: "DevOps, Cloud, and Agile Foundations",
            institution: "IBM",
            date: "March 18, 2023",
        },
    ];

    // Reverse the order of "Mes spécialisations"
    specializations.reverse();

    const remainingCertifications = certificationsData.filter(certification =>
        !specializations.some(specialization =>
            certification.title === specialization.title && certification.institution === specialization.institution
        )
    );

    return (
        <div className="container" style={{ width: "80%" }}>
            <h3 className="row mt-4 mb-4" color="#45332">Mes spécialisations</h3>
            <div className="row">
                {specializations.map((certification, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mt-2">
                            <img className="card-img-top" src={certification.img} alt={`C${index + 1}`} />
                            <div className="card-body">
                                <h5 className="card-title">{certification.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{certification.institution}</h6>
                                <p className="card-text">{certification.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="row mt-4 mb-4" color="#45332">Mes cours</h3>
            <h6 className="row mt-4 mb-4" color="#45332">2023</h6>
            <div className="row">
                {remainingCertifications
                    .filter(certification => certification.date.includes("2023"))
                    .map((certification, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mt-2">
                                <img className="card-img-top" src={certification.img} alt={`C${index + 1}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{certification.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{certification.institution}</h6>
                                    <p className="card-text">{certification.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <h6 className="row mt-4 mb-4" color="#45332">2022</h6>
                {remainingCertifications
                    .filter(certification => certification.date.includes("2022"))
                    .map((certification, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mt-2">
                                <img className="card-img-top" src={certification.img} alt={`C${index + 1}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{certification.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{certification.institution}</h6>
                                    <p className="card-text">{certification.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Certifications;
