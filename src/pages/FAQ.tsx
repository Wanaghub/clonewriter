import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary-600">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is CloneWriter?</AccordionTrigger>
              <AccordionContent>
                CloneWriter is a SaaS platform that allows you to clone the writing style of top business writers and bloggers to create unique content. Our AI-powered system analyzes the writing patterns of successful authors and helps you generate content in their style.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How does the credit system work?</AccordionTrigger>
              <AccordionContent>
                Credits are used to generate content in a writer's style. The top 5 writers are available for free, while premium writers require credits. You can purchase credits through our platform, and they will be deducted for each content generation request.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How accurate is the style cloning?</AccordionTrigger>
              <AccordionContent>
                Our AI system has been trained on extensive writing samples from each author, achieving a high degree of accuracy in replicating their unique writing styles, including tone, vocabulary, and sentence structure patterns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use the generated content commercially?</AccordionTrigger>
              <AccordionContent>
                Yes, all content generated through CloneWriter is yours to use commercially. However, we recommend reviewing and editing the content to ensure it perfectly matches your needs and maintains originality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How do I choose the right writer for my content?</AccordionTrigger>
              <AccordionContent>
                Browse our curated list of 100 top business writers, each with a detailed profile showing their expertise and writing style. You can start with our free writers to test different styles before committing to premium options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What happens if I'm not satisfied with the generated content?</AccordionTrigger>
              <AccordionContent>
                If you're not satisfied with the generated content, you can regenerate it with modified parameters. For premium writers, we offer a limited number of regenerations within the same credit usage.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;