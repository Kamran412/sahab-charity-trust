require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true},
  description: String,
  details: String,
  image: String,
  date: { type: Date, default: Date.now },
});
const Program = mongoose.model("Program", programSchema);

const programs = [
  {
    category: "education",
    title: "Child Education Program",
    description: "Providing free education and resources for underprivileged children.",
    details: "At Sahab Charitable Trust, we believe that education is the key to a brighter future for every child. Our child education programs are designed to provide quality learning opportunities to underprivileged and marginalized children. We organize schools, tuition classes, and educational workshops to ensure that no child is left behind. Through scholarships, study materials, and digital learning initiatives, we strive to make education accessible and engaging. Our focus is not just on academics, but also on developing life skills, creativity, and critical thinking. By mentoring and supporting children, we help them build confidence, set goals, and dream big. Together with our teachers, volunteers, and partners, we aim to nurture the next generation of responsible, knowledgeable, and empowered citizens.",
    image: "https://images.unsplash.com/photo-1692269725827-699e04a11cdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluZGlhbiUyMGNoaWxkJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww"
  },
  {
    category: "healthcare",
    title: "Healthcare Access Initiative",
    description: "Ensuring proper healthcare for women and children in rural communities.",
    details: "At Sahab Charitable Trust, we believe that access to quality healthcare is a fundamental right for every individual. Our healthcare initiatives are dedicated to providing affordable and timely medical assistance to underserved communities. From routine health check-ups to critical care, we ensure that every person receives compassionate attention and professional treatment. We organize medical camps, awareness programs, and vaccination drives to promote a healthier lifestyle and prevent diseases. Our team of experienced doctors, nurses, and volunteers work tirelessly to reach remote areas, ensuring no one is left behind. We also focus on mental health support, maternal and child care, and health education to empower communities. By bridging the gap between medical services and those in need, we strive to create a society where healthcare is not a privilege but a right. Together with our partners and donors, we aim to build a healthier, happier, and more resilient community.",
    image: "https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "women-empowerment",
    title: "Women's Empowerment Program",
    description: "Empowering women, transforming communities",
    details: "At Sahab Charitable Trust, we are committed to empowering women to lead confident, independent, and fulfilling lives. Our women empowerment programs focus on education, skill development, and economic independence, helping women unlock their true potential. We organize vocational training, workshops, and mentorship programs that equip women with practical skills and knowledge to pursue careers, start businesses, and participate actively in society. Awareness campaigns on health, legal rights, and personal safety further ensure that women are informed and confident in making decisions. By fostering a supportive environment, we aim to break social barriers and challenge gender stereotypes. Our initiatives also encourage leadership, teamwork, and community engagement, enabling women to become role models for others. Through education, advocacy, and active participation, we strive to create a society where women are respected, valued, and empowered to contribute fully. By empowering women, we not only transform individual lives but also strengthen families, communities, and the nation as a whole.",
    image: "https://plus.unsplash.com/premium_photo-1720798652393-8749a78f496c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHx3b21lbiUyMGltcG93ZXJlbWVudCUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    category: "disaster-relief",
    title: "Natural Disaster Relief",
    description: "Providing immediate assistance and long-term support during natural disasters.",
    details: "At Sahab Charitable Trust, we are dedicated to providing immediate and effective relief during natural disasters. Our disaster relief programs aim to support affected communities with food, clean water, medical aid, and temporary shelter in times of crisis. We organize rescue operations, relief camps, and rehabilitation initiatives to help people recover and rebuild their lives. Our team works tirelessly to coordinate resources, volunteers, and donations to ensure timely assistance reaches those in need. Beyond emergency relief, we focus on raising awareness, preparedness, and resilience to minimize the impact of future disasters. By standing together with communities during their most vulnerable moments, we aim to restore hope, safety, and stability, making a lasting difference in the lives of those affected.",
    image: "https://plus.unsplash.com/premium_photo-1695914233513-6f9ca230abdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fE5hdHVyYWwlMjBkaXNhc3RlciUyMHJlbGllZiUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    category: "environment",
    title: "Environmental Conservation",
    description: "Promoting sustainable practices and environmental awareness.",
    details: "At Sahab Charitable Trust, we are committed to protecting and preserving the environment for current and future generations. Our environmental conservation programs focus on promoting sustainable practices, raising awareness about climate change, and encouraging eco-friendly lifestyles. We organize tree plantation drives, clean-up campaigns, and workshops on waste management and recycling. By collaborating with schools, communities, and local authorities, we aim to instill a sense of responsibility towards nature. Our initiatives also include conserving natural habitats, protecting wildlife, and promoting water and energy conservation. Through education and active participation, we empower individuals to make informed choices that reduce environmental impact. Together, we strive to create a greener, cleaner, and healthier planet where humans and nature coexist in harmony.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
  },
  {
    category: "Unity",
    title: "Strength in Togetherness",
    description: "Together, we achieve more..",
    details: "At Sahab Charitable Trust, we believe that unity is the foundation of a strong and resilient community. When people come together, they can overcome challenges, share resources, and support each other in meaningful ways. Our unity initiatives focus on fostering collaboration, mutual respect, and a sense of belonging among community members. Through group activities, awareness campaigns, and social programs, we encourage individuals from diverse backgrounds to work hand-in-hand for common goals. By promoting teamwork and solidarity, we aim to bridge social divides and strengthen community bonds. Our programs highlight the importance of empathy, cooperation, and collective action in creating positive change. When we stand united, we empower each other, amplify our impact, and build a society where no one is left behind. Together, we can transform lives, create hope, and shape a brighter future for all",
    image: "https://img.freepik.com/premium-photo/top-view-diverse-group-people-joining-their-hands-together-sandy-ground-showing-unity-teamwork_14117-193084.jpg"
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("✅ DB Connected");
    await Program.deleteMany(); // old programs delete (optional)
    await Program.insertMany(programs);
    console.log("✅ Programs inserted!");
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
