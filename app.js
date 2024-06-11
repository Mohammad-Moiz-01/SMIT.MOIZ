const dialogflow = require('@google-cloud/dialogflow');
const { WebhookClient, Suggestion } = require('dialogflow-fulfillment');
const express = require("express")
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 8080;

app.post("/webhook", async (req, res) => {
    var id = (res.req.body.session).substr(43);
    console.log(id)
    const agent = new WebhookClient({ request: req, response: res });

    function hi(agent) {
        console.log(`Default Welcome Intent  =>  hi`);
        agent.add("Hello! Welcome to SAYLANI how can i assist you.")
    }

    function smit(agent) {
        console.log(`SMIT-BOT  =>  What is Saylani Welfare Trust?`);
        agent.add("A.Saylani Welfare Trust is a non-profit organization founded in 1999 by Maulana Bashir Farooq Qadri. It aims to alleviate human suffering through various welfare services, including healthcare, education, food distribution, and emergency relief.")
    }

    function smit2(agent) {
        console.log(`SMIT-2  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Healthcare: Free clinics, hospitals, mobile health units, and specialized medical services.")
        agent.add("Education: Schools, scholarships, vocational training, and educational support programs.")
        agent.add("Food Distribution: Daily meals, ration distribution, and special food drives during Ramadan and other events.")
        agent.add("Emergency Relief: Aid during natural disasters, refugee support, and crisis management.")
        agent.add("Additional Services: Clean water projects, orphan support, marriage assistance, housing, and community development.")
        agent.add("")
        agent.add("")
    }

    function smit3(agent) {
        console.log(`SMIT-3  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("You can donate through:")
        agent.add("Online: Via the official website using credit/debit cards or bank transfers.")
        agent.add("Bank Deposit: Direct deposits into designated bank accounts.")
        agent.add("Mobile Payments: Through various mobile banking apps and services.")
        agent.add("In-Person: At Saylani centers and branches.")
    }

    function smit4(agent) {
        console.log(`SMIT-4  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Yes, donations are tax-deductible in Pakistan. Donors should keep their receipts and check local tax laws for details.")
    }

    function smit5(agent) {
        console.log(`SMIT-5  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Volunteers can sign up through the official website or visit local branches. Opportunities include participating in food distribution, healthcare services, educational programs, and emergency relief efforts.")
    }

    function smit6(agent) {
        console.log(`SMIT-6  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Primarily in Pakistan, but they also provide aid internationally during major crises and disasters.")
    }

    function smit7(agent) {
        console.log(`SMIT-7  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Through regular financial reporting, audits, and updates on project outcomes. These reports are accessible on the official website.")
    }

    function smit8(agent) {
        console.log(`SMIT-8  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Individuals in need can visit a Saylani center, contact the helpline, or apply online for assistance.")
    }

    function smit9(agent) {
        console.log(`SMIT-9  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Saylani Mass IT Training Program: Provides IT education and job placement services.")
        agent.add("Free Food Program: Serves thousands of meals daily across Pakistan.")
        agent.add("Medical and Diagnostic Centers: Offer free medical services and advanced diagnostic facilities.")
        agent.add("")
    }

    function smit10(agent) {
        console.log(`SMIT-10  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Follow Saylani on social media, subscribe to their newsletters, and regularly visit the official website.")
    }

    function smit11(agent) {
        console.log(`SMIT-11  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("To alleviate human suffering, provide relief to the poor and needy, and empower communities through education and health services.")
    }

    function smit12(agent) {
        console.log(`SMIT-12  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Through donations from individuals, businesses, and philanthropic organizations.")
    }

    function smit13(agent) {
        console.log(`SMIT-13  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Yes, the Trust offers options for recurring donations via their website.")
    }

    function smit14(agent) {
        console.log(`SMIT-14  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("These include free consultations, surgeries, medication, and specialized services such as dialysis and mental health support.")
    }

    function smit15(agent) {
        console.log(`SMIT-15  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Yes, Saylani extends its services internationally, particularly during major global crises.")
    }

    function smit16(agent) {
        console.log(`SMIT-16  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("By running schools, offering scholarships, and providing vocational training to empower individuals with skills for employment.")
    }

    function smit17(agent) {
        console.log(`SMIT-17  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("A daily initiative providing free meals to thousands of people, ensuring no one goes hungry.")
    }

    function smit18(agent) {
        console.log(`SMIT-18  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Immediate aid during natural disasters, such as food, medical care, and shelter, both locally and internationally.")
    }

    function smit19(agent) {
        console.log(`SMIT-19  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Through orphanages, educational sponsorships, and comprehensive care programs.")
    }

    function smit20(agent) {
        console.log(`SMIT-20  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Programs in IT, tailoring, carpentry, and other trades to help individuals gain employment skills.")
    }

    function smit21(agent) {
        console.log(`SMIT-21  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("The Saylani Mass IT Training Program is an initiative by Saylani Welfare Trust to provide free IT education and training to individuals, helping them acquire skills for better employment opportunities in the tech industry.")
    }

    function smit22(agent) {
        console.log(`SMIT-22  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("The program is open to all individuals with a basic educational background and a keen interest in IT and related fields. Specific courses may have additional prerequisites.")
    }

    function smit23(agent) {
        console.log(`SMIT-23  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("The program offers a variety of courses, including but not limited to:")
        agent.add("Web Development")
        agent.add("Mobile App Development")
        agent.add("Graphic Design")
        agent.add("Digital Marketing")
        agent.add("Data Science")
        agent.add("Cybersecurity")
    }

    function smit24(agent) {
        console.log(`SMIT-24  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Interested individuals can apply through the Saylani Welfare Trust's official website. The application process typically involves filling out an online form and submitting necessary documents.")
    }

    function smit25(agent) {
        console.log(`SMIT-25  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("No, all courses under the Saylani Mass IT Training Program are free of charge.")
    }

    function smit26(agent) {
        console.log(`SMIT-26  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("The duration of the courses varies depending on the subject. Most courses range from a few weeks to several months.")
    }

    function smit27(agent) {
        console.log(`SMIT-27  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Yes, many of the courses are available online to accommodate students who cannot attend in person.")
    }

    function smit28(agent) {
        console.log(`SMIT-28  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Upon successful completion of a course, participants receive a certificate from Saylani Welfare Trust, which is recognized by various industries.")
    }

    function smit29(agent) {
        console.log(`SMIT-29  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Graduates can pursue various career paths, such as:")
        agent.add("Software Developer")
        agent.add("Web Developer")
        agent.add("Graphic Designer")
        agent.add("IT Support Specialist")
    }

    function smit30(agent) {
        console.log(`SMIT-30  =>  What are the main services provided by Saylani Welfare Trust?`);
        agent.add("Yes, the Saylani Mass IT Training Program includes job placement assistance to help graduates find suitable employment opportunities.")
    }

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', hi);
    intentMap.set('SMIT-BOT', smit);
    intentMap.set('SMIT-2', smit2);
    intentMap.set('SMIT-3', smit3);
    intentMap.set('SMIT-4', smit4);
    intentMap.set('SMIT-5', smit5);
    intentMap.set('SMIT-6', smit6);
    intentMap.set('SMIT-7', smit7);
    intentMap.set('SMIT-8', smit8);
    intentMap.set('SMIT-9', smit9);
    intentMap.set('SMIT-10', smit10);
    intentMap.set('SMIT-11', smit11);
    intentMap.set('SMIT-12', smit12);
    intentMap.set('SMIT-13', smit13);
    intentMap.set('SMIT-14', smit14);
    intentMap.set('SMIT-15', smit15);
    intentMap.set('SMIT-16', smit16);
    intentMap.set('SMIT-17', smit17);
    intentMap.set('SMIT-18', smit18);
    intentMap.set('SMIT-19', smit19);
    intentMap.set('SMIT-20', smit20);
    intentMap.set('SMIT-21', smit21);
    intentMap.set('SMIT-22', smit22);
    intentMap.set('SMIT-23', smit23);
    intentMap.set('SMIT-24', smit24);
    intentMap.set('SMIT-25', smit25);
    intentMap.set('SMIT-26', smit26);
    intentMap.set('SMIT-27', smit27);
    intentMap.set('SMIT-28', smit28);
    intentMap.set('SMIT-29', smit29);
    intentMap.set('SMIT-30', smit30);
    agent.handleRequest(intentMap);
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});