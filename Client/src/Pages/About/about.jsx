import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://www.hungrymuscle.in/Skins/hungrymuscles/images/parallex-img.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="text-sm">
            <Link to="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-1 gap-12">
          {/* About Us Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">About Us</h2>
            <div className="h-1 w-20 bg-red-500 mt-2 rounded-full mb-6" />
            <div className="space-y-6 text-gray-800 text-lg text-justify">
              <p>
                Biocore Nutrition & Supplement Store is dedicated to helping
                individuals achieve their health and fitness goals through
                trusted, high-quality health supplements and personalized
                guidance. Since its inception in 2020, Biocore Nutrition has
                grown into a beacon of reliability for fitness enthusiasts and
                health-conscious individuals.
              </p>

              <p className="mt-4">
                At Biocore Nutrition, we believe in empowering individuals by offering
                only the best in premium, authentic health supplements. Our commitment
                lies in sourcing products from globally recognized brands, ensuring
                quality, safety, and efficacy with every purchase.
              </p>

              <p className="mt-4">
                Whether you&apos;re a seasoned athlete, a fitness enthusiast, or just
                starting your wellness journey, we strive to meet your unique needs
                with a diverse selection of nutritional products. We understand that
                navigating the world of supplements can be overwhelming. That&apos;s
                why our mission goes beyond simply selling products—we provide
                tailored recommendations, expert advice, and ongoing support to help
                our customers achieve their desired health outcomes.
              </p>

              <p className="mt-4">
                Our experienced team is always on hand to guide you toward the right
                supplements to complement your fitness regimen and dietary goals.
                Biocore Nutrition has established itself as an authorized dealer for
                the industry&apos;s top brands. This direct connection eliminates
                intermediaries, enabling us to offer competitive pricing without
                compromising quality.
              </p>

              <p className="mt-4">
                From protein powders to performance enhancers, vitamins, and specialty
                supplements, our inventory is curated to meet the evolving demands of
                modern fitness and wellness enthusiasts. Our commitment doesn&apos;t
                stop at the point of sale. We continuously strive to educate and
                inform our customers about the science behind supplementation and its
                role in achieving a healthy lifestyle.
              </p>

              <p className="mt-4">
                Our blog, newsletter, and in-store consultations provide valuable
                insights into nutrition, exercise, and overall well-being. High
                import duties and counterfeit products have often made it difficult
                for consumers to trust or afford health supplements. At Biocore
                Nutrition, we aim to bridge this gap by providing genuine products
                directly from trusted brands.
              </p>

              <p className="mt-4">
                By maintaining transparency and focusing on customer satisfaction, we
                have built lasting relationships with our clientele and become a
                household name in the industry. Our vision is to create a community
                that thrives on health and fitness, where individuals feel empowered
                to achieve their goals and lead their best lives.
              </p>

              <p className="mt-4">
                With an unwavering dedication to quality and customer service,
                Biocore Nutrition is here to inspire, support, and grow alongside
                you on your wellness journey.
              </p>
              <p>
                Our mission is to offer high-quality supplements sourced from
                the best brands, ensuring that our customers receive products
                that are safe, effective, and affordable. We act as an
                authorized dealer for top supplement brands, eliminating
                intermediaries to offer the best prices.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Mission
            </h2>
            <div className="h-1 w-20 bg-red-500 mt-2 rounded-full mb-6" />
            <div className="text-gray-800 text-lg text-justify">
              <p className="mb-6">
                At Biocore Nutrition & Supplement Store, our mission is to empower individuals on their unique health and fitness journeys by offering personalized nutrition advice and a curated selection of premium dietary supplements. We are committed to becoming your trusted partner in achieving your transformation goals, providing the resources, guidance, and products you need to succeed.
              </p>

              <p className="mb-6">
                We understand that every person's health journey is different. That's why we focus on creating tailored solutions that cater to your individual needs, whether you're striving to build muscle, lose weight, enhance performance, or simply improve your overall well-being. Our team of experts is dedicated to guiding you every step of the way, ensuring that you have the knowledge and tools necessary to make informed decisions about your health.
              </p>

              <p className="mb-6">
                At the heart of our mission lies a commitment to quality and authenticity. We believe that achieving your fitness goals starts with the right foundation—safe, effective, and high-quality supplements. That's why we partner with trusted brands and industry leaders to bring you only the best. From protein powders to vitamins, performance boosters, and wellness products, our extensive inventory is designed to meet the diverse needs of our community.
              </p>

              <p className="mb-6">
                In addition to offering exceptional products, we aim to educate and inspire our customers. Through personalized consultations, detailed product information, and ongoing support, we equip you with the insights you need to maximize your results. Our goal is not just to provide supplements but to empower you with the knowledge to build a sustainable, healthy lifestyle that aligns with your long-term goals.
              </p>

              <p className="mb-6">
                We are passionate about breaking down the barriers that often prevent individuals from achieving their full potential. Whether it's misinformation, lack of guidance, or access to affordable, authentic products, we are here to bridge the gap. By fostering trust and transparency, we strive to create a community where everyone feels supported, informed, and motivated to succeed.
              </p>

              <p className="mb-6">
                Your transformation is our purpose. Biocore Nutrition exists to inspire confidence and drive results, no matter where you are in your journey. We believe that through dedication, perseverance, and the right resources, anyone can unlock their full potential and lead a healthier, more fulfilling life.
              </p>

              <p>
                Together, let's redefine what it means to achieve wellness. With Biocore Nutrition & Supplement Store by your side, the possibilities are limitless, and your health goals are always within reach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
