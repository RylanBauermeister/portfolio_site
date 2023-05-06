const homeSafeDescription = "HomeSafe was developed with the belief that people should feel safe when they walk around their city. The app is a user-centric interactive crime map fo the city of Seattle which allows users to dynamically weight crime types to fit what they want to avoid. It also allows for user interaction in the form of being able to create and like reports (which are visible to all users) and avoids (which are visible only to the user who created them). All in all, it's an application with the safety of its users in mind."

const mixxyDescription = "Mixxy is a fun little project designed to allow users to find and store cocktail recipes. With a playful aesthetic and jaunty music, Mixxy is half throwback to older schools of design, half casino bartender. It utilizes JWT login to keep user profiles distinct and secure, and React Router to ensure that the process of navigating the site is quick and painless to its users."

const trosDescription = "t.roS is my love letter to sorting algorithms. While I've always had a passion for the elegance of a well written sort, I think there is a great deal of aethetic satisfaction to be had in watching them do their magic. t.roS, as a result, is a sorting algorithm visualizer that allows you to play with things like swap, compare, and access times in order to better see how each of five different sorting algorithms can work on your data."

const donationNationDescription = "DonationNation is a slightly tongue-in-cheek take on a social media site that revolves around the ability to make cash donations from one use to another. Users can make profiles, review, message, and make donations to other users. They are in turn notified if another user performs any of those other actions with them.  Built purely on Rails, DonationNation is an early exploration of what it looks like to build a basic social media platform."

const mealwormDescription = "Mealworm is a CLI for chefs. It uses API queries from a Ruby backend to find recipes based on input strings, then save them to a database of recipes for the specific user. It also walks users through the steps to cook the recipes they have acquired, and then rate/anotate after they are done. Finally, it even provides a shopping list for the user based on the recipes they have selected for cooking. This robust little CLI is an excellent tool for any tech-savvy chef."

const primeVideoDescription = "Prime Video Android has been an incredible opportunity to learn, lead, and (as Amazon would say) Think Big. My first exposure to a truly world-class application, it encouraged me to think about applications from every angle from right-to-left languages to multi-platform launch mechanisms to services that need to be able to handle millions of calls in a short period of time. My work here has seen me in leadership rolls within the org, and becoming the subject matter expert for a number of pieces of the application.";

const skillmationDescription = "Skillmation was a warmup to get back into tech after a long absence, and was an absolute delight (despite being a lot of Drupal and PHP, which I regret to say I don’t really enjoy). They are a non-profit based out of Port Townsend, WA, who provide skill mentorship to… well, anyone who wants it. I did improvements to their homepage and some work on their calendar events, but this was mostly just me getting my feet wet again. A wonderful organization and better people."

const tableSafeDescription = "TableSafe (now MadMobile) was a small startup in Kirkland focused on proprietary tablet software for at-the-table electronic check services. It was truly the startup experience, with everything from 1AM meetings to launch during off-hours to redesigning our service structure to be able to handle an increasing traffic load. It provided numerous opportunities to grow quickly and extend reach beyond what a junior engineer would typically have the opportunity to do, and I was able to quickly move into tech lead positions that I leveraged to improve the application backend and improve the receipt processing system.";

const labkeyDescription = "LabKey was a truly unique into the world of tech, and one which was definitely a trial by fire. They had never had a new grad engineer, and my first days were just learning javascript in a basement. From there however I evolved to providing projects for data visualization in a billable-hours context working with clients such as the Gates Foundation, Novo Nordisk, and the Fred Hutch. The work involved taking requirements directly from customers and transforming them into application features."

const projectInfo = {
  schoolProjectInfo: [
    {
      name: "HomeSafe",
      imgsrc: "homesafe_logo.jpg",
      description: homeSafeDescription,
      link: "https://github.com/RylanBauermeister/homesafe-frontend"
    },
    {
      name: "Mixxy",
      imgsrc: "mixxy_logo.png",
      description: mixxyDescription,
      link: "https://mixxy-drinks.herokuapp.com/login"
    },
    {
      name: "t.roS",
      imgsrc: "t.roS_logo.png",
      description: trosDescription,
      link: "https://tros.herokuapp.com/"
    },
    {
      name: "DonationNation",
      imgsrc: "donation_nation.png",
      description: donationNationDescription,
      link: "https://donation-nation.herokuapp.com/"
    },
    {
      name: "Mealworm",
      imgsrc: "mealworm_logo.png",
      description: mealwormDescription,
      link: "https://github.com/quinncidences/module-one-final-project-guidelines-seattle-web-career-031119"
    }
  ],
  workProjectInfo: [
    {
      name: "Prime Video Android",
      imgsrc: "prime_video_logo.png",
      description: primeVideoDescription,
      link: "https://play.google.com/store/apps/details?id=com.amazon.avod.thirdpartyclient&hl=en_US&gl=US&pli=1"
    },
    {
      name: "TableSafe",
      imgsrc: "tablesafe_logo.jpeg",
      description: tableSafeDescription,
      link: "https://madmobile.com/tablesafe/"
    },
    {
      name: "Skillmation",
      imgsrc: "skillmation_logo.jpeg",
      description: skillmationDescription,
      link: "https://www.skillmation.org/"
    },
    {
      name: "LabKey",
      imgsrc: "labkey_logo.avif",
      description: labkeyDescription,
      link: "https://www.labkey.com/"
    }
  ]

}



export default projectInfo;
