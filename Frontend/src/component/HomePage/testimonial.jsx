import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { Box } from "@mui/material";
import img from "../../assets/bg/bgl6.jpeg";
import img1 from "../../assets/team/Swami Chidanand Ji.jpeg";
import img2 from "../../assets/team/4.jpg";
import img_2 from "../../assets/team/Mr Rajeev Ahal.jpg";
import img3 from "../../assets/team/7.jpg";
import img5 from "../../assets/team/5.jpg";
import img6 from "../../assets/team/6.jpg";
import img7 from "../../assets/team/2.jpg";
import img8 from "../../assets/team/8.jpg";
import img9 from "../../assets/team/1.jpg";
import img10 from "../../assets/team/Mr Manu Gaur.jpg";
import img11 from "../../assets/team/Mr Shekhar Vijendra.jpg";
import img12 from "../../assets/team/Dr Chinmay Pandya.jpg";
import img13 from "../../assets/team/3.jpg";
import { Padding } from "@mui/icons-material";

const data = [
	{
		authorContent:
			"The concept of BHARTIYA NADI PARISHAD will accelerate the revival of rivers in the country with unprecedented coordination.",
		authorName: "HH Swami Chidanand Saraswati",
		designation: "President, Parmarth Niketan",
		image: img1,
	},
	{
		authorContent:
			"I am happy to know that a collective efforts for the rejuvenation of the rivers of the India is being done through the Bhartiya Nadi Parishad. I wish the entire team of the BNP and Riverman, Shri Raman Kant all the best for this edneavor and hope that the BNP will be successful in its objectives. ",
		authorName: "Vinay Kumar Saxena",
		designation: "Lt. Governer, Delhi",
		image: img2,
	},
	{
		authorContent:
			"The Bhartiya Nadi Parishad marks a pivotal moment in India's efforts to bring together large scale community empowerment and collaborations for river basin restoration and its conservation. With a shared vision and a dedicated platform, this council is set to drive water security, foster growth, and enhance the quality of life for people. Together, we can achieve remarkable outcomes that ripple beyond the boundaries.",
		authorName: "Mr Rajeev Ahal",
		designation:
			"Director, Natural Resources Management & Agroecology, GIZ India",
		image: img_2,
	},
	{
		authorContent:
			"I am happy to know about the dedicated endeavors of the Bhartiya Nadi Parishad Meerut, Uttar Pradesh under your able leadership, which is progressive towards the noble cause of river rejuvenation and environment conservation. I extend my best wishes for the grand success of your efforts. May your esteemed contributions inspire and unite individuals across the nation to participate in securing the vitality of our rivers for the generations to come.  ",
		authorName: "Dr Sanjeev Kumar Baliyan",
		designation:
			"Minister of State for Fisheries, Animal Husbandry and Dairying Government of India",
		image: img3,
	},
	{
		authorContent:
			"River rejuvenation work in the country will be strengthened through the BHARTIYA NADI PARISHAD. The need for such an effort was felt for a long time.",
		authorName: "Mr. Manu Gaur",
		designation: "Founder – Taxpayers Association of India (TAXAB)",
		image: img10,
	},
	{
		authorContent:
			"BHARTIYA NADI PARISHAD plays a crucial role in advancing the significant mission of river rejuvenation in the country. Its efforts in improving and conserving the condition of rivers will not only maintain ecological balance but also lay the foundation for a green and prosperous environment for future generations.",
		authorName: "Mr. Kunwar Shekhar Vijendra",
		designation: "Co-founder & Chancellor of Shobhit University",
		image: img11,
	},
	{
		authorContent:
			"यह जानकर अन्तर्मन अत्यंत हर्ष, गौरव एवं अभिनंदन से भर उठा है कि भारतीय नदी परिषद् भारत में नदी पुनर्जीवन के कार्य को े के साथ ही सर्वसामान्य में इसकी स्वीकार्यता बनाने की दिशा में सकारात्मक परिवर्तन का वाहक बनेगा। धन्य है भारतीय नदी परिषद् का आदर्श जिसने सदउद्देश्य के लिए कमद बढ़ाने का शौर्य और साहस दिखाया। यह सौभाग्य जो आप पर बरसा है, भगवान करे इसमें सम्पूर्ण देश जुड़े। इसकी प्रेरणा एवं परम्परा अक्षय बनी रहे ऐसी कामना करता हूं। ",
		authorName: "डाॅ चिन्मय पाण्डया",
		designation: "प्रति कुलपति - देव संस्कृति विश्वविधालय, हरिद्वार",
		image: img12,
	},
	{
		authorContent:
			"भारतीय नदी परिषद् द्वारा देश में प्रारम्भ किए गए नदी पुनर्जीवन के प्रयास सराहनीय हैं। देव भूमि उत्तराखंड़ भी इसमें अहम भूमिका निभाने के लिए उत्साहित है। मैं भारतीय नदी परिषद् के इन प्रयासों हेतु शुभकामनाएं प्रेषित करता हूं। ",
		authorName: "पुष्कर सिंह धामी",
		designation: "मुख्यमंत्री उत्तराखंड़",
		image: img5,
	},
	{
		authorContent:
			"समाज और सरकार के सहयोग से नदियों के पुनर्जीवन के क्षेत्र में भारतीय नदी परिषद् द्वारा प्रारम्भ किए गए प्रयास प्रशंसनीय हैं। चिंतन व मनन के साथ प्रारम्भ किए गए यह प्रयास भविष्य में मील का पत्थर साबित होंगे। आपके इन प्रयासों से सकारात्मक परिणाम अवश्य प्राप्त होंगे। भारतीय नदी परिषद् के उक्त प्रयासों को अग्रिम शुभकामनाएं। ",
		authorName: "रविशंकर जी",
		designation:
			"अनंत विभूषित संत शिरोमणि ‘रावतपुरा सरकार’ - श्री  रावतपुरा सरकार धाम देवस्थानम, मध्य प्रदेश",
		image: img6,
	},
	{
		authorContent:
			"मुझे यह जानकर अत्यंत प्रसन्नता है कि भारतीय नदी परिषद् द्वारा नदी पनुर्जीवन व जल संचयन जैसे विषयों पर गंभीरता से प्रयास किया जा रहा है। मैं ब्रहमकुमारीज के समस्त सदस्यों की ओर से तथा परमात्मा शिव से प्रार्थना करती हूं कि भारतीय नदी परिषद् अपने मिशन में कामयाब हो।",
		authorName: "दादी रतन मोहिनी",
		designation: "मुख्य प्रशासिका, ब्रहमकुमारीज",
		image: img7,
	},
	{
		authorContent:
			"यह सभी के लिए गर्व का विषय है कि भारतीय नदी परिषद् द्वारा भारत की नदियों के पुनर्जीवन हेतु गंभीरता से नवीन प्रयास हेतु अपने कदम आगे बढ़ाए जा रहे हैं। अपने जन कल्याणकारी दायित्वों का निर्वहन करते हुए मेवाड़ के राजाओं ने भी राज्य की नदियों के हित में अनेक स्थाई कार्य किए हैं। भारतीय नदी परिषद् के संस्थापक श्रीमान रमन कांत जी, ऐसी ही जनकल्याणकारी एवं पर्यावरणीय योजनाओं के साथ नदियों के कायाकल्प हेतु लगे हैं। मैं ईश्वर से भारतीय नदी परिषद् की सफलता की कामना करता हूं।",
		authorName: "लक्ष्यराज सिंह मेवाड़",
		designation: "राजा मेवाड़",
		image: img13,
	},
	{
		authorContent:
			"मेरा मानना है कि भारतीय नदी परिषद् एवं सरकार के सामूहिक प्रयासों द्वारा स्थानीय नदियों को निर्मल व अविरल बनाने का कार्य किया जा सकेगा। इससे जनमानस में सकारात्मक उर्जा का संचार भी होगा। मैं आशा करता हूं कि भारतीय नदी परिषद् अपने उद्देश्यों में सफल होगी।",
		authorName: "स्वतंत्र देव सिंह",
		designation: "केबिनेट मंत्री, जल शक्ति मंत्रालय, उत्तर प्रदेश सरकार",
		image: img8,
	},
	{
		authorContent:
			"मुझे प्रसन्नता है कि देश में नदी पुनर्जीवन के कार्यों के लिए भारतीय नदी परिषद् द्वारा सामूहिक प्रयास प्रारम्भ किए जा रहे हैं। मेरा मानना है कि भारतीय नदी परिषद् के माध्यम से सरकार व नदी कार्यकर्ताओं के महीन अंतर को पाटा जा सकेगा। मैं अपनी व संत ईश्वर फाउंडेशन की ओर से भारतीय नदी परिषद् की पूरी टीम को इस प्रयास हेतु बहुत-बहुत शुभकामनाएं देती हूं और आशा करती हूं कि भारतीय नदी परिषद् अपने सभी इच्छित लक्ष्यों को प्राप्त कर अपने उद्देश्यों में सफल होगी।",
		authorName: "वृंदा खन्ना",
		designation: "महासचिव, संत ईश्वर फाउंडेश",
		image: img9,
	},
	{
		authorContent:
			"मुझे अत्यंत प्रसन्नता है कि देष में नदियों के सुधार हेतु भारतीय नदी परिशद् के माध्यम से सामूहिक प्रयास प्रारंभ किया गया है। जब मां गंगा सहित देष की नदियां निर्मल व अविरल बहेंगी तब ही भारत की मानव सभ्यता व संपदा भी खुषहाल होगी। अलौकिक षक्ति इस प्रयास को सफल करे। भारतीय नदी परिशद् की संपूर्ण टोली को अनंत षुभकामनाएं। ओम",
		authorName: "पूज्य स्वामी कैलाषानंद गिरी जी",
		designation: "निरंजन पीठाधीष्वर, सिद्धपीट श्री दक्षिण काली मंदिर",
		image: img9,
	},
	{
		authorContent:
			"I am happy to learn about the dedicated endeavors of the Bhartiya Nadi Parishad under your leadership toward the noble cause of River Rejuvenation following ecosystem approach. The collective efforts over the years by Bhartiya Nadi Parishad have been instrumental in reviving our cherished river resulting in formulating robust policies for their protection & management is remarkable. ",
		authorName: "Dr Afroz Ahmad",
		designation: "Member, National Green Tribunal",
		image: img9,
	},
];

export function Testimonials() {
	const [autoplayInterval, setAutoplayInterval] = useState(500); // Initial autoplay interval
	const [isPaused, setIsPaused] = useState(false); // State to track hover pause

	const handleHover = (isHovering) => {
		setIsPaused(isHovering);
		setAutoplayInterval(isHovering ? null : 500); // Pause autoplay on hover
	};

	return (
		<Box
			sx={{
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Box backgroundColor={"#00000082"} py={2}>
				<Carousel
					autoplay={!isPaused}
					autoplayInterval={autoplayInterval}
					loop={true}
					onMouseEnter={() => handleHover(true)}
					onMouseLeave={() => handleHover(false)}
					navigation={({ setActiveIndex, activeIndex, length }) => (
						<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
							{new Array(length).fill("").map((_, i) => (
								<span
									key={i}
									className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
										activeIndex === i
											? "w-8 bg-white"
											: "w-4 bg-white/50"
									}`}
									onClick={() => setActiveIndex(i)}
								/>
							))}
						</div>
					)}
				>
					{data.map((testimonial, index) => (
						<div
							key={index}
							style={{
								padding: "30px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								columnGap: "30px",
								rowGap: "20px",
								flexWrap: "wrap",
								flexDirection: "row",
							}}
						>
							<div>
								<Box
									style={{
										height: "240px",
										width: "240px",
										borderRadius: "50%",
										backgroundSize: "cover",
										backgroundPosition: "top",
										backgroundImage: `url(${testimonial.image})`,
									}}
								></Box>
							</div>
							<Box
								sx={{
									color: "white",
									maxWidth: {
										xs: "100%",
										md: "calc(100% - 400px)",
									},
								}}
							>
								<p
									style={{
										fontSize: "20px",
										fontWeight: "bold",
										textAlign: "justify",
										marginBottom: "20px",
									}}
								>
									{testimonial.authorContent}
								</p>
								<p
									style={{
										fontSize: "20px",
										color: "#f49b0e",
										fontWeight: "bold",
									}}
								>
									{testimonial.authorName}
								</p>
								<p
									style={{
										fontSize: "20px",
										fontWeight: "bold",
									}}
								>
									{testimonial.designation}
								</p>
							</Box>
						</div>
					))}
				</Carousel>
			</Box>
		</Box>
	);
}
