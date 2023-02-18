import React, { useEffect } from 'react'
import "../styles/Carousel.css";
console.log("Run");

let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const Carousel = ({ images, captions }) => {
    useEffect(() => {
        showSlides(slideIndex);
    });
    return (<>
        {/* <!-- Slideshow container --> */}
        <div className="slideshow-container">

            {/* <!-- Full-width images with number and caption text --> */}
            {images.map((image, id) => {
                return (
                    <div className="mySlides fade">
                        <div className="numbertext">{id + 1}/{images.length}</div>
                        <img src={image} style={{ width: "100%" }} />
                        <div className="text">{captions[id]}</div>
                    </div>
                )
            })}


            {/* <!-- Next and previous buttons --> */}
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
        <br />

        {/* <!-- The dots/circles --> */}
        <div style={{ textAlign: "center" }}>
            {
                images.map((image, id) => {
                    return <span className="dot" onClick={() => currentSlide(id + 1)}></span>

                })
            }

        </div>
    </>
    )
}

export default Carousel;