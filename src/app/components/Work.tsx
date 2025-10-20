import Experience from "../lib/Experience";

function Work() {
  return (
        <section id="work" className="snap-section">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-5xl font-semibold mb-6">Experience</h1>
                <Experience 
                    title="Senior Backend Engineer"
                    company="Snapsheet" 
                    location="Chicago, IL" 
                    date="June 2020 - Present" 
                    description="Designed and scaled a cloud-native claims automation platform using .NET Core, C#, React, and PostgreSQL, processing 1.2M+ claims annually for major insurers.\
                                Enhanced an event-driven policy notification system with Azure Functions and Service Bus, reducing latency by 55% and accelerating claim handling.\
                                Optimized database performance by refining Entity Framework queries and SQL procedures, cutting report generation time by 60%.\
                                Incorporated external adjuster platforms via RESTful APIs, reducing claim cycle time by 3 days and improving data visibility.\
                                Automated DevOps pipelines using Azure DevOps and Terraform, reducing infrastructure provisioning time by 70% and ensuring repeatable deployments.\
                                Led adoption of asynchronous messaging with Azure Service Bus and CQRS patterns, improving backend resilience and fault tolerance.\
                                Collaborated with analytics teams to implement real-time BI dashboards, increasing visibility into claim metrics and improving SLA compliance by 35%.\
                                "
                    defaultShow={true}/>
                <Experience 
                    title="Software Engineer" 
                    company="Stripe" 
                    location="San Francisco, CA" 
                    date="August 2019 - April 2020"
                    description="Built high-accuracy reconciliation and payout systems in .NET Core, C#, and RabbitMQ, ensuring reliable transfers for 100K+ global merchants.\
                                Architected a refund processing engine blended with fraud detection, reducing fraudulent payouts by $1.2M annually.\
                                Led migration of mission-critical apps from Azure to on-prem, achieving zero downtime and saving $500K per year.\
                                Delivered high-throughput transaction export APIs handling 1B+ records monthly with sub-500ms latency.\
                                Modernized core services by implementing microservices architecture, reducing deployment conflicts by 80% and increasing scalability.\
                                Implemented centralized logging and observability with Prometheus and Grafana, improving incident response time by 40%.\
                                Enhanced API gateway security with token-based authentication and rate limiting, reducing abuse and ensuring PCI-DSS compliance.\
                                Assisted in transitioning legacy storage services to a distributed file system, enhancing scalability and reliability for enterprise workloads.\
                                "/>
                <Experience 
                    title="Full Stack Developer" 
                    company="Salesforce" 
                    location="San Francisco, CA" 
                    date="May 2015 - March 2017"
                    description="Expanded onboarding and configuration tools using ASP.NET MVC, C#, and AngularJS, enabling seamless setup for 200K+ enterprise users.\
                                Created scalable .NET Core APIs for the fraud detection platform, supporting 1M+ transactions daily with 99.99% uptime.\
                                Migrated legacy WebForms UI to Angular, reducing load times by 47% and cutting development time by half.\
                                Created reusable component libraries and REST interfaces that improved cross-team delivery speed by 25%.\
                                " />
                <Experience 
                    title="Software Engineer Intern" 
                company="Google" 
                location="Los Angeles, CA" 
                date="July 2014 - February 2015" 
                description="Contributed to Google Drive’s backend migration tools in C#/.NET, enabling seamless onboarding for 50+ enterprise clients.\
                            Developed a multi-threaded file transformer to sanitize and process legacy data, ensuring clean and efficient migration.\
                            Integrated NUnit tests into the CI pipeline, reducing feedback time by 45%.\
                            Redesigned internal debugging dashboards using JavaScript and Apps Script, accelerating issue resolution for engineering teams.\
                            "/>
            </div>
        </section>
    );
}

export default Work;