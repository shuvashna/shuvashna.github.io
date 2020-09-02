var projectArray = [{
    "color": "#FFF6E2",
    "name": "Teenboost",
    "titleImage": "images/teenboost/teenboost.png",
    "overview": "Ginger provides on-demand mental health support through smartphone- based technology.<br/><br/>Inspired by and named after the ginger root and the effects of it’s healing properties, Ginger\’s mission is to use a preventative approach to mental addressing issues before they evolve into greater challenges and providing support anywhere, at any time.<br/><br/>While Ginger has made considerable headway in the adult market, they see a chance to expand their services to youth ages 11-18. So, as a design team we were brought on board to create and execute that vision of expansion into the teen market.",
    "duration": "15 days",
    "roles": "UI Design Lead, User Research, Information Architect, Prototyping and testing",
    "team": "Joshua DeCastro, Siana Popova",
    "tools": "Figma, Trello, Miro<br/>Platform: Mob app",
    "problem": "As Ginger reaches millions of people around the world in 30 countries through its partnerships with employers and health plans demographic group of age 11- 18 is yet to be explored. How can we create a environment where our teenaged users can an approach, a trustworthy way to navigate through personal, social, external obstacles and decision-making in their life without fear of being?",
    "solution": "Designing a new application that creates an interactive, visually pleasing and personalized experience, our users will be able to use preventative measures, self-help methods and professional clinical resources to resolve their problems.",
    "solutionImg": "images/teenboost/solutionImg.png",
    "marketResearch": "Market research was conducted by collecting and comparing data of similar apps available in the market. In which we studied different apps like Youper , Moodpath, smiling mind that provided similar service as Ginger.<br/><br/>Here we studied about their UI, user flow and different features that they providedSome of the features that we felt that could solidify our app were daily check ins, Journaling, Insights,quick read on different topics like mental health, mindfulness and various life issues our teen might be going through. One of the major features that we incorporated in our app was a mood gauge that ginger lacks, where users would update how they are feeling and get recommendations accordingly.",
    "featureInventoryImg": "images/teenboost/featureInventoryImg.png",
    "elementAnalysisImg": "images/teenboost/elementAnalysisImg.png",
    "userResearch": "To better understand our users we interview participants who lied in the demographic group of 12- 18. Some of the question from our research interview were:<br/><br/>" +
                     "- How comfortable are they talking about their feelings?<br/>" +
                     "- Who do they go to when you have a dilemma or need advice?<br/>" +
                     "- Who or where do they go for motivation? How do you keep yourself motivated?<br/>" +
                     "- What are some challenges they’re dealing with in your life right now?<br/>" +
                     "- Do they feel comfortable discussing your feelings with a stranger?<br/>" +
                     "- Why do you want to talk to other people about your problems or issues?<br/>" +
                     "- What are your thoughts on having a life coach or career coach?<br/>",
    "userResearchInsights": "Key Findings:<br/>" +
                             "- They have very busy structured lifestyle<br/>" +
                             "- Our users are visual and use apps and games to communicate in groups. Texting is the main way to keep in touch.<br/>" +
                             "- Though we think of teenagers tech savvy they find joy in physical activities, learning new things and outdoor activities and sports<br/>" +
                             "- Do not share their feelings with parents but rely on them for big decisions<br/>" +
                             "- Current life challenge for them COVID, lack of personal connection, school from home, life transition.<br/>" +
                             "- They are comfortable sharing about their feelings, willing to talk with strangers if they are trustworthy<br/>" +
                             "- Some of the self help methods Humor, Journaling, writing, play with friends, exercise, sleep, listen to music<br/>",
    "userResearchInsightsImg": "images/teenboost/userResearchInsightsImg.png",
    "personasContent": "After research we came up with two user personas based on their goals and tasks.",
    "personasImg1": "images/teenboost/personasImg1.png",
    "personasImg2": "images/teenboost/personasImg2.png",
    "brainstormProductFeature": "As we analysed the data gathered from our C&C analysis, and user research we came up with a list of features. With the help of card sorting methods we were able to group and prioritize them. The features listed below were chosen.<br/>"+
                                 "- Check- In<br/>"+
                                 "- Chat<br/>"+
                                 "- Video<br/>"+
                                 "- Isight<br/>"+
                                 "- Recommendations<br/>"+
                                 "- Journal<br/>",
    "informationArchitecture": "We used information architecture to organize the product features",
    "informationArchitectureImg": "images/teenboost/informationArchitectureImg.png",
    "userFlow": "With a happy path in mind a general flow of user was created where user’s journey begins as she opens the app to explore and self learn on various topic to getting connected with a coach",
    "userFlowImg": "images/teenboost/userFlowImg.png"
},{
    "color":"#DAC3B1",
    "name": "New India Bazaar",
    "titleImage": "images/teenboost.png"
}];

var project;
$(document).ready(function(){
    project = projectArray[0];
    initTopProjectContent();
    initProjectOverview();
    initProblemAndSolution();
    initResearch();
    initPersonas();
    initIdeation();
});

function initTopProjectContent(){
    $("body").css("background-color", project["color"]);
    $(".problem-content").css("background-color", project["color"]);
    $(".project-content-top>h1").text(project["name"]);
    $(".project-content-top>img").attr("src", project["titleImage"]);
}

function initProjectOverview(){
    $("#overview-content").html(project["overview"]);
    $("#duration").html(project["duration"]);
    $("#roles").html(project["roles"]);
    $("#team").html(project["team"]);
    $("#tools").html(project["tools"]);
}

function initProblemAndSolution(){
    $("#problemStatement").html(project["problem"]);
    $("#solutionStatement").html(project["solution"]);
    $("#solutionImg").attr("src", project["solutionImg"]);
}

function initResearch(){
    $("#marketResearch").html(project["marketResearch"]);
    $("#featureInventoryImg").attr("src", project["featureInventoryImg"]);
    $("#elementAnalysisImg").attr("src", project["elementAnalysisImg"]);
    $("#userResearch").html(project["userResearch"]);
    $("#userResearchInsights").html(project["userResearchInsights"]);
    $("#userResearchInsightsImg").attr("src", project["userResearchInsightsImg"]);
}

function initPersonas(){
    $("#personasContent").html(project["personasContent"]);
    $("#personasImg1").attr("src", project["personasImg1"]);
    $("#personasImg2").attr("src", project["personasImg2"]);
}

function initIdeation(){
    $("#brainstormProductFeature").html(project["brainstormProductFeature"]);
    $("#informationArchitecture").html(project["informationArchitecture"]);
    $("#informationArchitectureImg").attr("src", project["informationArchitectureImg"]);
    $("#userFlow").html(project["userFlow"]);
    $("#userFlowImg").attr("src", project["userFlowImg"]);
}