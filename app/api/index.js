export default function (req, res, next) {
  // req is the Node.js http request object
  if (req.url === '/use-cases') {
    res.json([
      {
        id: 1,
        title: "Marketing analytics",
        body:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        footer: "Last updated 3 mins ago",
        tags: ["marketing"]
      },
      {
        id: 2,
        title: "Personalized Marketing",
        body:
          "The more companies understand their customers, the better they serve them. AI can assist companies in this task and support them to give personalized experiences for customers.",
        footer: "Last updated 3 mins ago",
        tags: ["marketing"]
      },
      {
        id: 3,
        title: "Dynamic pricing",
        body:
          "Dynamic pricing (also called pricing optimization) allows companies to optimize markdowns. This helps with maximizing revenues. One of the easiest transformations a business can achieve, dynamic prices directly impact the bottom line and can be rolled out in a matter of days. Otto has increased its sales and improved its forecast quality by 40% in a case study by Blue Yonder.",
        footer: "Last updated 3 mins ago",
        tags: ["marketing"]
      },
      {
        id: 4,
        title: "Social media monitoring",
        body:
          "Companies can leverage machine learning to optimize the channel, target audience, message and timing of your social media posts, as well. For example, The Economist has achieved a 290% increase in clicks per tweet by allowing SocialFlow to reach the audience at the right time by analyzing its online habits.",
        footer: "Last updated 3 mins ago",
        tags: ["marketing"]
      },
      {
        id: 5,
        title: "Improved engagement",
        body:
          "Every time you execute a search on Google, your reaction is recorded. If you click the top result and stay, it would be a successful search. On the other hand, when you click to the second page of results, or type in a new search string without clicking any of the results, it is likely that search results can be improved. Such feedback loops can be built on many apps and websites, improving the user experience.",
        footer: "Last updated 3 mins ago",
        tags: ["marketing"]
      },
      {
        id: 6,
        title: "Content generation",
        body:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        footer: "Last updated 3 mins ago",
        tags: ["marketing"]
      },

      {
        id: 7,
        title: "Sales Forecasting",
        body:
          "Companies can automatically forecast sales accurately based on all customer contacts and previous sales outcomes with the support of AI tools. With the insights from these tools, companies decrease their contact time with customers and give their sales personnel more sales time while increasing forecast accuracy. Hewlett Packard Enterprise indicates that it has experienced a 5x increase in forecast simplicity, speed, and accuracy with Clari’s sales forecasting tools.",
        footer: "Last updated 3 mins ago",
        tags: ["sales"]
      },
      {
        id: 8,
        title: "Sales Analytics",
        body:
          "As Gartner discusses, sales analytic systems provide functionality that supports discovery, diagnostic and predictive exercises that enable the manipulation of parameters, measures, dimensions or figures as part of an analytic or planning exercise. AI algorithms can automate the data collection process and present solutions to improve sales performance. To have more detailed information, you can read our article about sales analytics.",
        footer: "Last updated 3 mins ago",
        tags: ["sales"]
      },

      {
        id: 9,
        title: "Chatbots",
        body:
          "Chatbots can understand more complicated queries as AI algorithms improve. Thus, businesses understand their customers better since chatbots collect information from customers while interacting with them and spot their weaknesses. There are other benefits like 24/7 availability and reduced costs, as bots can handle more tasks as they learn more. All these benefits significantly improve the customer satisfaction of businesses.",
        footer: "Last updated 3 mins ago",
        tags: ["customer-service"]
      },
      {
        id: 10,
        title: "Call routing",
        body:
          "Intelligent call routing systems identify the caller and the reason for the call to assign her to the right agent. Though we mentioned phone call routing in the definition, intelligent routing can take place regardless of where the customer contacts the company. With AI, skill-based routing systems use agents’ track record, their training, and skills to ensure that the caller is routed to the most capable agent. Feel free to read our article about intelligent call routing if you want to learn more.",
        footer: "Last updated 3 mins ago",
        tags: ["customer-service"]
      },
      {
        id: 11,
        title: "Call analytics",
        body:
          "AI can be used for advanced analytics on call data to uncover insights to improve customer satisfaction and increase efficiency. These insights would be helpful to discover any problems during calls and suggest new ways to improve call quality. Sestek indicates that ING Bank observed a 15% increase in sales quality score and a 3% decrease in overall silence rates after they integrated AI into their call systems.",
        footer: "Last updated 3 mins ago",
        tags: ["customer-service"]
      },
      {
        id: 12,
        title: "Survey / Review analytics",
        body:
          "Companies usually make surveys and ask for reviews to improve customer satisfaction. AI can assist to analyze text fields in surveys and reviews to discover new insights.",
        footer: "Last updated 3 mins ago",
        tags: ["customer-service"]
      },

      {
        id: 13,
        title: "Invoicing",
        body:
          "Invoicing is a highly repetitive process that many companies perform manually. This causes human errors in invoicing and high costs in terms of time, especially when a high volume of documents needs to be processed. Thus, companies can handle these repetitive tasks with AI, automate invoicing procedure and save significant time while reducing invoicing errors. The company avoids re-invoicing costs with AI tools, as well.",
        footer: "Last updated 3 mins ago",
        tags: ["operations"]
      },
      {
        id: 22,
        title: "Data Security",
        body:
          "Malware is a growing problem for companies. In 2014, Kaspersky Lab said it had detected 325,000 new malware files every day. AI algorithms can look for patterns in how data in the cloud is accessed, and report anomalies that could predict security breaches. By detecting any cyber-attacks or abnormal activities, AI becomes a prominent solution to protect companies from any data leakages.",
        footer: "Last updated 3 mins ago",
        tags: ["security"]
      },
      {
        id: 14,
        title: "Fraud Detection",
        body:
          "AI improves itself to spot potential cases of scams across different fields. As an example, PayPal uses AI algorithms do detect fraudulent actions. The company has tools that compare millions of transactions and can distinguish between legitimate and fraudulent transactions. As AI algorithms improve, Hui Wang, senior director of global risk and data sciences, said PayPal has cut its false-alarm rate in half.",
        footer: "Last updated 3 mins ago",
        tags: ["security"]
      },

      {
        id: 15,
        title: "Process Mining",
        body:
          "Process mining tools use AI algorithms to discover actual process models out of the raw event logs. These actual processes reflect the actual performance of the business processes by a layer of software which sits on top of the company’s IT systems. As companies understand their actual processes better, they can improve their performance more effectively.",
        footer: "Last updated 3 mins ago",
        tags: ["technology"]
      },
      {
        id: 16,
        title: "Robotic Process Automation (RPA)",
        body:
          "Process mining tools use AI algorithms to discover actual process models out of the raw event logs. These actual processes reflect the actual performance of the business processes by a layer of software which sits on top of the company’s IT systems. As companies understand their actual processes better, they can improve their performance more effectively.",
        footer: "Last updated 3 mins ago",
        tags: ["technology"]
      },
      {
        id: 17,
        title: "Internet of Things (IoT)",
        body:
          "Process mining tools use AI algorithms to discover actual process models out of the raw event logs. These actual processes reflect the actual performance of the business processes by a layer of software which sits on top of the company’s IT systems. As companies understand their actual processes better, they can improve their performance more effectively.",
        footer: "Last updated 3 mins ago",
        tags: ["technology"]
      },
      {
        id: 18,
        title: "Image recognition",
        body:
          "Process mining tools use AI algorithms to discover actual process models out of the raw event logs. These actual processes reflect the actual performance of the business processes by a layer of software which sits on top of the company’s IT systems. As companies understand their actual processes better, they can improve their performance more effectively.",
        footer: "Last updated 3 mins ago",
        tags: ["technology"]
      },
      {
        id: 19,
        title: "Speech recognition",
        body:
          "Process mining tools use AI algorithms to discover actual process models out of the raw event logs. These actual processes reflect the actual performance of the business processes by a layer of software which sits on top of the company’s IT systems. As companies understand their actual processes better, they can improve their performance more effectively.",
        footer: "Last updated 3 mins ago",
        tags: ["technology"]
      },
      {
        id: 20,
        title: "Natural Language Processing (NLP)",
        body:
          "Process mining tools use AI algorithms to discover actual process models out of the raw event logs. These actual processes reflect the actual performance of the business processes by a layer of software which sits on top of the company’s IT systems. As companies understand their actual processes better, they can improve their performance more effectively.",
        footer: "Last updated 3 mins ago",
        tags: ["technology"]
      },

      {
        id: 21,
        title: "Call volume forecasting",
        body: "",
        footer: "",
        department: "call-center"
      }
    ])
  } else {
    res.json({ foo: 'bar' })
  }
}
