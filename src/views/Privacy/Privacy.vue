<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 xl8 offset-xl2>
        <v-card flat>
          <v-container>
            <v-layout>
              <v-flex xs12>
                <div class="grey--text text--darken-2 subheading">
                  <div class="grey--text text--darken-1 headline">
                    <b>{{ content.titulo }}</b>
                  </div>
                  <div>
                    {{ content.fecha }}
                  </div>
                  <div class="grey--text text--darken-1 title mt-2">
                    <b>{{ content.subtitulo1 }}</b>
                  </div>
                  <div class="mt-2">
                    {{ content.parrafo1 }}
                  </div>
                  <div class="mt-2">
                    {{ content.parrafo2 }}
                  </div>
                  <div class="mt-2">
                    {{ content.parrafo3 }}
                  </div>
                  <div class="mt-2">
                    {{ content.parrafo4 }}
                  </div>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo2"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo5 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo3"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo6 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo4"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo7 }}
                  </p>
                  <div class="grey--text text--darken-2 subheading">
                    <b>{{ content.parrafoPre8 }}</b
                    ><span>{{ content.parrafo8 }}</span>
                  </div>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo9 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo10 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo11 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo12 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo13"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo14"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo15 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo16 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo5"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo17 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo18"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo19"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo20 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo21"></span>
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo6"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo22 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo7"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo23 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo8"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo24 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo9"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo25 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo26 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo10"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo27 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo11"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo28 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo29"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo30 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo31 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo12"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo32 }}
                  </p>
                  <p class="grey--text text--darken-2 title ">
                    <span v-html="content.subtitulo13"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo33 }}
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Privacy",
  data() {
    return {
      content: {
        titulo: "Euler Kids  PRIVACY NOTICE",
        fecha: "Last Updated: October 1st, 2018",
        subtitulo1: "General",
        parrafo1:
          "Welcome to the Euler Kids website hereafter " +
          "(“Euler Kids”, “site”, “platform”, “academy”, “we”, “our”) and our " +
          "social networks on Instagram.com and Facebook.com (collectively, " +
          "the “Site”), all owned and operated by Euler Kids S.A. de C.V.",
        parrafo2:
          "At Euler Kids, your privacy and the privacy of the children who use " +
          "our service is the most important thing, for this reason, based on the " +
          "Mexican provisions of Art. 3o. Fraction XIV of the Federal Law on Protection " +
          "of Personal Data Held by Individuals (LFPDPPP), the regulation of ARCO rights " +
          "(Access, Rectification, Cancellation and Opposition of the handling of their " +
          "personal data) based on Article 1 and 2 of the same law, the Child Privacy " +
          "Protection Rule on the Internet or COPPA, " +
          "the provisions of the Family Educational Rights and Privacy Act or FERPA, " +
          "and the Student's Privacy Pledge " +
          "we have written the following Privacy Notice which describes the type of information " +
          "we collect when you use the site, how we use it, how you can access and update this " +
          "information and the security measures we have to protect it.",
        parrafo3:
          "Euler Kids is a completely free world-class educational platform, " +
          "powered by donations. On our site users have the option to use our services " +
          "with or without an account, however if they register with a free account " +
          "they will have access to extra features, for example their progress analytics.",
        parrafo4:
          "By using the Euler Kids site, you are in full agreement with the " +
          "terms of our Privacy Notice and our Terms of Service. If you do not agree with " +
          "any or all of the terms of this Privacy Notice, please do not use Euler Kids.",
        subtitulo2: "<b>Responsability</b>",
        parrafo5:
          "Euler Kids is responsible for the usage of personal and/or " +
          "sensitive data of the user which may be any person who has registered " +
          "on our site.",
        subtitulo3: "<b>Purpose</b>",
        parrafo6:
          "This Privacy Notice is intended to ensure personal and/or " +
          "sensitive data of the user. Euler Kids collects personal data that " +
          "may include sensitive data, for its operation and in general to give " +
          "educational services. Euler Kids ensures the strictest confidentiality " +
          "in the collection of such information.",
        subtitulo4: "<b>Information collected and its use</b>",
        parrafo7:
          "Personal Information in this Privacy Notice refers to any information " +
          "concerning an identified user. Sensitive Personal Information refers to the " +
          "information that may affect the most intimate sphere of the user, or which misuse " +
          "could rise up to serious risk for him/her.",
        parrafoPre8: "Information you provide:",
        parrafo8:
          " Euler Kids asks for the " +
          "minimum amount of Personal Information when you register an account. " +
          "For example a username, an email and a password.",
        parrafo9:
          "The email is required when you register to Euler Kids to " +
          "mitigate multi-accounting. Your email will remain protected as Sensitive " +
          "Personal Information and once you have verified it, it will give you access " +
          "to the full functionality of Euler Kids for free. The email will be used " +
          "to send general information about Euler Kids for example, notifications, " +
          "security practices, site updates, changes to this Privacy Notice and the Terms " +
          "of Service, as well as to recover your password.",
        parrafo10:
          "When you register a user under the age of 13 in Euler Kids, you " +
          "must use the parent’s or guardian’s email. The verification of this email " +
          "will be taken by Euler Kids as a Parental Consent for the use of the site. ",
        //"If the user does not verify the account within 10 days after the account is " +
        //"registered, Euler Kids will delete the account and the associated email from " +
        //"our system.",
        parrafo11:
          "Any additional information that you add to your profile, such as your " +
          "name, last name and address, is completely optional. If you delete any information " +
          "from your profile, it will automatically be deleted from our database.",
        parrafo12:
          "Euler Kids can collect usage information on our site to be used " +
          "in certain features of the site, such as the number of problems you have attempted, " +
          "the number of lessons and videos you have viewed and the time you spent practicing. " +
          "Analyzing your interaction with our site enables us to provide you with a customized " +
          "educational experience, improve our current products and services, and to develop new ones.",
        parrafo13:
          "<b>Information from other sources:</b> We also may obtain information, including " +
          "Personal Information, from third parties or sources other than our Properties. For " +
          "example, if you donate to Euler Kids via Patreon or PayPal or if you purchase any of our products, " +
          "we may obtain your name and mailing address to send your products. If we combine or " +
          "associate information from other sources with Personal Information that we collect " +
          "through our Properties, we will treat the combined information as Sensitive Personal " +
          "Information in accordance to this Privacy Notice.",
        parrafo14:
          "<b>Technical Information:</b> When using Euler Kids, our servers, like most " +
          "web-based services, automatically collect certain site usage information associated " +
          "with your computer. Site usage information is non-personal information that includes, " +
          "but is not limited to, browser type, operating system, IP address, and the domain name " +
          "from which you accessed Euler Kids. It may also include information such as the date " +
          "and time you accessed Euler Kids, how much time you spent on Euler Kids, the pages " +
          "you visit, and other “click-stream” data.",
        parrafo15:
          "Whether or not you are a registered member, we also use or may use Cookies, " +
          "which are text strings that Euler Kids stores in your browser in order to save " +
          "your site progress and enable us to provide you with a more personalized learning experience.",
        parrafo16:
          "Cookies can be cleared at any time from your browser. If you do not want " +
          "Euler Kids to store any cookie information, feel free to disable cookies in your " +
          "browser, although this may affect your browser with other websites.",
        subtitulo5: "<b>Managing your information</b>",
        parrafo17:
          "The users can edit or delete their information from their profile page " +
          "at any time. The edited information is automatically updated in our databases. " +
          "The information that you delete is automatically and completely deleted from our databases.",
        parrafo18:
          "<b>For the service:</b> We use your information to provide services, to customize " +
          "and improve your learning experience, to measure and improve our service, " +
          "to get the consent of the parent when children initiate account creation, " +
          "to give parents information and data about the kid's progress, to track users usage, " +
          "to send relevant notifications or newsletters in case you previously authorized it, " +
          "to diagnose and fix service and technical problems and to enforce agreements, " +
          "terms, conditions and policies.",
        parrafo19:
          "<b>For security:</b> We use your information to keep the service secure. For example," +
          "to authenticate a user or to identify and prevent harmful activities." +
          "For personal data subject to the European Union General Data Processing Regulations " +
          "(GDPR), we rely on several legal bases to process the data. These legal bases include " +
          "where:",
        parrafo20:
          "The processing is necessary to perform our contractual obligations in our Terms of " +
          "Service or other contracts with you (such as to provide you the Service as described " +
          "in our Terms of Service);" +
          "You have given your prior consent, which you may withdraw at any time (such as for " +
          "marketing purposes or other purposes we obtain your consent for from time to time); " +
          "The processing is necessary to comply with a legal obligation, a court order or to " +
          "exercise or defend legal claims; " +
          "The processing is necessary for the purposes of our legitimate interests, such as " +
          "in improving, personalizing, and developing our service, marketing our service, " +
          "such as new features or products that may be of interest, and promoting safety and " +
          "security as described above.",
        parrafo21:
          "<b>Closing your account:</b> We hope you enjoy using Euler Kids, " +
          "however you have the option to delete your account from your profile page. This " +
          "action will automatically remove all your data, including your progress, your username, " +
          "email and password, as well as any other data that you have generated, so that we will " +
          "not be able to recover your data once the account is canceled, this action is irreversible. " +
          "You can also request the deletion of your account by contacting us at help@eulerkids.com.",
        subtitulo6: "<b>Disclosing your information</b>",
        parrafo22:
          "Your information will never be sold and/or shared to/with third parties " +
          "unless required by the law. Your information will only be disclosed if it is legally " +
          "necessary to do so. For example, if the information is required to Euler Kids " +
          "through a court order, or if someone hacks Euler Kids.",
        subtitulo7: "<b>Images usage</b>",
        parrafo23:
          "At Euler Kids we are very grateful to the people and institutions " +
          "that support us with their donations to continue our work, and we recognize them " +
          "openly. However, any logo that may appear on any of our sites, newsletters or " +
          "emails, are property of their respective owner and are displayed for non-profit " +
          "information purposes.",
        subtitulo8:
          "<b>Exercise of the Rights of Access, Rectification, Cancellation and Opposition (ARCO)</b>",
        parrafo24:
          "Any Euler Kids users can exercise their ARCO rights through a writing " +
          "that complies with the requirements contemplated in art. 29 of the Law sent to " +
          "help@eulerkids.com. And the site will provide the necessary means to make it happen.",
        subtitulo9: "<b>Security</b>",
        parrafo25:
          "The security of your Personal Information is very important to us. " +
          "We have worked very hard to maintain administrative, technical and physical " +
          "security measures to ensure the confidentiality and integrity of your Personal " +
          "Information. At Euler Kids we have multiple security measures to protect you " +
          "from the loss, misuse or alteration of the information that is under our control. " +
          "These include password encryption, static and in transit data encryption, regular " +
          "security systems updates, constant risk assessment, and immediate remediation of " +
          "security vulnerabilities. You can help us protect your account from unauthorized " +
          "access by keeping your password secure all the time.",
        parrafo26:
          "However, although the information provided by the user is protected " +
          "by several security mechanisms, Euler Kids can not guarantee 100% the security " +
          "of the same, the absence of interruptions or errors in accessing the site or the " +
          "database, data and its content, or that these are permanently updated without " +
          "inaccuracies or inaccuracies. Please notify us if you notice any misuse of your " +
          "account or any suspected breach of security. Euler Kids will comply, as long as " +
          "there are no causes that make it impossible, and as soon as we have news of the errors, " +
          "disconnection or lack of updating in the contents, all those tasks aimed at correcting " +
          "the failures as well as applying the security measure according to the events.",
        subtitulo10: "<b>Storage of the collected information</b>",
        parrafo27:
          "Euler Kids is hosted on OVH servers, with whom we have a contract " +
          "that stipulates the enhanced security measures they have. For example, Personal " +
          "Data is stored in a server equipped with industrial standard firewalls and " +
          "anti-DDoS standards. Additionally, the facilities where their servers are located " +
          "are equipped with 24/7 security systems, video surveillance, intrusion detection " +
          "systems and locked cage areas.",
        subtitulo11: "<b>Children’s Privacy Policy (users under 13)</b>",
        parrafo28:
          "Euler Kids is committed to children’s privacy, so we have " +
          "created special security measures to maintain a safe space to protect their " +
          "Personal Information.",
        parrafo29:
          "Euler Kids <b>does not  knowingly permit</b> Child Users to register " +
          "directly for our site. If Euler Kids discovers that Personal Information " +
          "of a child user has been collected on our site without parental consent, then " +
          "Euler Kids will take appropriate steps to delete this information. If you " +
          "are a parent or guardian and discover that your child under 13 has a registered " +
          "account with our properties without your consent, please contact us at " +
          "help@eulerkids.com and request the deletion of the child’s account from our systems.",
        parrafo30:
          "At Euler Kids, we do not have the means of communication between users, " +
          "so children do not have direct contact with other users, nor can they receive " +
          "documents or text messages from outsiders within the site.",
        parrafo31:
          "Euler Kids will not share, sell or disclose Personal Information " +
          "or information of the progress of any child with/to third parties. The information " +
          "will only be shared with the child and with his or her parent or guardian " +
          "(or as indicated in this Privacy Notice).",
        subtitulo12: "<b>Changes and Updates to this Privacy Notice</b>",
        parrafo32:
          "We may make changes to this Privacy Notice from time to time, " +
          "and you should review it periodically so that you are updated on any changes. " +
          "Changes are effective once posted on the Site. When we do, we will notify you " +
          "by updating the date of this Privacy Notice and posting it on this page of our site. " +
          "We will also notify you of any material changes to this Privacy Notice via email.",
        subtitulo13: "<b>Contact</b>",
        parrafo33:
          "If you have any comments or questions regarding this Privacy Notice, " +
          "please email Euler Kids at help@eulerkids.com."
      }
    };
  }
};
</script>
