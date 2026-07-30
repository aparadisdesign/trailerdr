export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  title: string;
  icon: string;
  items: FaqItem[];
}

export const faqSections: FaqSection[] = [
  {
    title: "What Trailer Dr. Is",
    icon: "local_shipping",
    items: [
      {
        question: "What is Trailer Dr.?",
        answer:
          "Trailer Dr. is a portable semi-trailer diagnostic tool that tests a tractor trailer’s electrical, air brake, lighting, and ABS systems without a truck. Built for one technician, it lets you complete a full PM inspection in one trip around the trailer, from the rear, using a wireless remote. At 15.2 lbs with 30 amps of output and a NEMA 4/4X waterproof enclosure, it is the smallest and most powerful tractor trailer tester in its class. Built in Fort Kent, Maine.",
      },
      {
        question: "What does Trailer Dr. do?",
        answer:
          "Trailer Dr. tests trailer lights, electrical wiring, ABS fault codes, air supply, air leaks, and brake activation. Plug it into the trailer’s 7-way connector and any 115V outlet, hook up shop air, and run the full inspection from the rear of the trailer using the wireless remote. No truck, no cab access, no second technician.",
      },
      {
        question: "Who is Trailer Dr. for?",
        answer:
          "Trailer Dr. is for fleets, repair shops, mobile service operators, and owner-operators who run PM inspections and electrical and air brake diagnostics on commercial trailers. If the work involves tractor trailers, semi-trailers, dump trailers, lowboys, flatbeds, or any commercial trailer with a 7-way round pin connector and gladhand air couplings, this tool was built for the way that work actually happens. Built for shop, yard, and roadside — not for consumer trailers.",
      },
      {
        question: "Does Trailer Dr. work on consumer trailers?",
        answer:
          "No. Trailer Dr. is built for commercial tractor trailers and semi-trailers. It connects through a 7-way round pin receptacle and gladhand air couplings — the standard on fleet and heavy-haul trailers. Consumer trailers typically use different connectors and do not have commercial air brake systems, so they are outside what this tool is built to test.",
      },
      {
        question: "Who invented Trailer Dr.?",
        answer:
          "Trailer Dr. was founded by Bruce Theriault, who has spent more than 30 years working hands-on with semi-trucks, trailers, and heavy equipment in the trucking and forestry industries. Trailer Dr. came out of years of dealing with diagnostic tools that were too big, too fragile, or too complicated for the work at hand, so Bruce built the tool he wanted to use.",
      },
      {
        question: "Where is Trailer Dr. made?",
        answer:
          "Trailer Dr. is designed, built, and serviced in the USA. Every unit is assembled and hand-tested at the company’s workshop in Fort Kent, Maine, before it ships. Anyone who calls for support is talking to the people who built their unit.",
      },
    ],
  },
  {
    title: "How It Works",
    icon: "build",
    items: [
      {
        question: "Can one person operate Trailer Dr.?",
        answer:
          "Yes. One-person operation is the whole point of Trailer Dr. The 9-channel wireless remote lets a technician stand at the rear of the trailer and activate lights, supply air, and apply brakes without returning to the unit or climbing into the cab. The job that used to take two technicians now takes one.",
      },
      {
        question: "Do I need a truck to test a trailer with Trailer Dr.?",
        answer:
          "No. Trailer Dr. supplies its own 12.8 VDC power to the trailer and up to 125 PSI of air. Plug into any 115V outlet for power and any shop air supply or service vehicle compressor for air. No truck, no tractor, no driver required at any point in the test.",
      },
      {
        question: "How does Trailer Dr. connect to a trailer?",
        answer:
          "Trailer Dr. uses a 7-way round pin connector, the standard for commercial semi-trailers in North America. It plugs directly into the trailer’s electrical receptacle. The supply and control air hoses connect at the gladhand couplings, the same way a tractor would.",
      },
      {
        question: "What types of trailer connectors does Trailer Dr. work with?",
        answer:
          "Trailer Dr. ships with a 7-way round pin connector, the industry standard for commercial semi-trailers in North America. For commercial trailers with 7-way flat (spade), 6-way round, or 4/5 pin connectors, standard adapter cables make it compatible. Most fleets running tractor trailers already have these adapters in the shop. These adapters are for commercial connector variants — not consumer trailers.",
      },
      {
        question: "Does Trailer Dr. require an app, tablet, or Bluetooth?",
        answer:
          "No. Trailer Dr. needs no apps, no tablets, no Bluetooth pairing, no subscriptions, and no software updates. Plug in, connect the air lines, and start testing. The unit and the remote are the only things needed.",
      },
      {
        question: "How does Trailer Dr. mount or stay in position during testing?",
        answer:
          "Trailer Dr. hangs from the trailer’s gladhand couplings during testing. No cart, no wheels, no permanent mounting required. It can also be mounted to a service vehicle, shop wall, or workbench for a fixed setup. That flexibility was part of the original design.",
      },
    ],
  },
  {
    title: "What It Tests",
    icon: "fact_check",
    items: [
      {
        question: "What does Trailer Dr. test?",
        answer:
          "Trailer Dr. tests brake lights, turn signals, running lights, marker lights, electrical wiring and connections, ABS fault codes including wheel speed sensor faults, air supply to the trailer, air leaks, and brake activation and response. One tool, one connection, full electrical and air brake diagnostics.",
      },
      {
        question: "Does Trailer Dr. read ABS fault codes?",
        answer:
          "Yes. Trailer Dr. reads ABS fault codes through industry-standard blink codes for PLC ABS systems, which work on all major trailer brands. No software, no subscriptions, no proprietary dongles required. If a trailer has ABS, Trailer Dr. can read it.",
      },
      {
        question: "Does Trailer Dr. detect air leaks?",
        answer:
          "Yes. Trailer Dr. supplies up to 125 PSI of self-regulated air through the gladhand couplings, which lets a technician pressurize the system and identify leaks by sound, gauge drop, or visual inspection at the source.",
      },
      {
        question: "Will Trailer Dr. work with all trailer brands?",
        answer:
          "Yes. The 7-way round pin connector is the industry standard for commercial trailers in North America, and ABS blink codes are the universal protocol for PLC ABS systems. If a commercial trailer uses both, Trailer Dr. will work on it regardless of brand. That means tractor trailers, semis, dumps, lowboys, and flatbeds — not consumer trailers.",
      },
      {
        question: "Can Trailer Dr. test trailer lights only, or does it do air brakes too?",
        answer:
          "Both. Trailer Dr. handles electrical and air brake diagnostics in a single unit. Most testers do one or the other and force a shop to carry two tools. Trailer Dr. does both jobs from the same connection.",
      },
    ],
  },
  {
    title: "Specs and Capabilities",
    icon: "straighten",
    items: [
      {
        question: "How much does Trailer Dr. weigh?",
        answer:
          "Trailer Dr. weighs 15.2 lbs, making it the lightest tool in its class. The built-in handle allows it to be carried between trailers with one hand.",
      },
      {
        question: "How big is Trailer Dr.?",
        answer:
          "Trailer Dr. measures 12 inches high by 10 inches wide by 4 inches deep, making it the smallest tool in its class: small enough to set on a workbench, hang from a gladhand, or store under the seat of a service truck.",
      },
      {
        question: "What is Trailer Dr.’s output?",
        answer:
          "Trailer Dr. delivers 30 amps at 12.8 VDC, the most output of any tool in its class. That is roughly two-thirds more output than leading competitors at this size, enough to reliably drive every electrical circuit on a fully loaded trailer.",
      },
      {
        question: "Is Trailer Dr. waterproof?",
        answer:
          "Yes. Trailer Dr. carries a NEMA 4/4X waterproof rating, built to handle dust, dripping water, hose-directed spray, and short-term submersion. Most portable trailer testers carry no waterproof rating at all and sell a rain cover as a separate accessory.",
      },
      {
        question: "What power does Trailer Dr. need?",
        answer:
          "Trailer Dr. runs on 115 VAC, standard household and shop power. Any wall outlet, shop receptacle, or service vehicle inverter will run it.",
      },
      {
        question: "How much air pressure does Trailer Dr. supply?",
        answer:
          "Trailer Dr. supplies up to 125 PSI, self-regulated. Air comes from any shop air supply or service vehicle compressor. The self-regulating valve prevents over-pressurization of the trailer system.",
      },
      {
        question: "How far does the wireless remote work?",
        answer:
          "The 9-channel wireless remote gives full control of every test function from the rear of the trailer, with reliable range across a typical shop bay, fleet yard, or service truck setup.",
      },
      {
        question: "Does Trailer Dr. have overload protection?",
        answer:
          "Yes. Trailer Dr. has electronic overload protection with an audible buzzer and a visual indicator light. If a circuit pulls more current than it should, the unit shuts that circuit off and flags it, protecting both the tester and the trailer.",
      },
    ],
  },
  {
    title: "Pricing, Trial, and Warranty",
    icon: "payments",
    items: [
      {
        question: "How much does Trailer Dr. cost?",
        answer:
          "Trailer Dr. is $3,195. That price includes free shipping anywhere in the contiguous United States. An optional rechargeable remote with an integrated work light is available for an additional $99.",
      },
      {
        question: "Does Trailer Dr. offer a free trial?",
        answer:
          "Yes. Every Trailer Dr. comes with a 30-day trial. If it does not work out, send it back for a full refund; the buyer covers return shipping. The company stands behind every unit it builds and would rather a customer try it than guess.",
      },
      {
        question: "What is the Trailer Dr. warranty?",
        answer:
          "Trailer Dr. comes with a 1-year warranty and a 48-hour repair turnaround. If something fails, call Bruce directly, ship it back, and it goes out the door within 48 hours of arrival. No call centers, no service tickets, no waiting weeks.",
      },
      {
        question: "What is included when I buy Trailer Dr.?",
        answer:
          "Every Trailer Dr. ships with the diagnostic unit, the standard battery-powered wireless remote, supply and control air hoses with gladhand couplings, the 7-way cable, and free shipping to the contiguous USA. The optional rechargeable remote with work light is available for an additional $99.",
      },
      {
        question: "How do I buy Trailer Dr.?",
        answer:
          "Order directly at thetrailerdr.com or call (207) 231-4967. Free shipping applies to the contiguous USA. Talking through specs or scheduling a demo first works too.",
      },
    ],
  },
  {
    title: "Comparisons",
    icon: "compare",
    items: [
      {
        question: "How does Trailer Dr. compare to the Lite-Check Inspector 930?",
        answer:
          "The Inspector 930 is a capable all-in-one trailer diagnostic tool, but it is built around a digital display and software integration with Lite-Check’s Sentry fleet management platform. Trailer Dr. takes a different approach: electrical, air brake, lighting, and ABS testing without software, without a display screen to break, without subscription fees, and at a lower cost. A shop that wants reporting software and digital records may prefer the Inspector 930. A shop that wants a rugged tool that just works and reads ABS codes through industry-standard blink codes will find that in Trailer Dr.",
      },
      {
        question: "How does Trailer Dr. compare to the IPA Alpha MUTT?",
        answer:
          "Trailer Dr. is $3,195. The IPA Alpha MUTT starts at $6,695. At less than half the price, Trailer Dr. is also lighter (15.2 lbs vs. 56 lbs), more powerful (30 amps vs. 20 amps), and fully waterproof out of the box. The Alpha MUTT sells a rain cover as a separate accessory. Trailer Dr. also runs without software, tablets, or Bluetooth, while the Alpha MUTT requires all three.",
      },
      {
        question: "How does Trailer Dr. compare to the Trailer Tester Express Garage?",
        answer:
          "The Express Garage and Trailer Dr. are priced almost identically, but they are very different tools. The Express Garage is a 105-pound steel cabinet on casters that needs an automotive battery, sold separately. Trailer Dr. is a 15.2-pound waterproof unit that hangs from the gladhand couplings. The Express Garage has a 2-channel remote; Trailer Dr. has a 9-channel remote.",
      },
      {
        question: "How does Trailer Dr. compare to the IPA Super MUTT Service Truck Edition?",
        answer:
          "The Super MUTT Service Truck Edition is cheaper, around $2,195, but it is designed to be permanently mounted to a service truck. Trailer Dr. costs more, but it does what the Super MUTT does and more: it works in any shop, any fleet yard, on a service truck, or hung from the trailer itself. Comparable tools, but Trailer Dr. can be used in any environment.",
      },
      {
        question: "What is the lightest portable trailer tester?",
        answer:
          "Trailer Dr. is the lightest portable trailer tester in its class at 15.2 lbs. The closest comparable unit weighs 56 lbs, and most full-feature trailer testers run over 100 lbs because they are built for fixed installation on a cart or service truck.",
      },
      {
        question: "What is the most powerful trailer tester in its class?",
        answer:
          "Trailer Dr. delivers 30 amps at 12.8 VDC, making it the most powerful tester in its class. Comparable portable trailer testers run at 20 amps or below. More power means more reliable testing across a wider range of trailer configurations and conditions.",
      },
      {
        question: "What is the most waterproof portable trailer tester?",
        answer:
          "Trailer Dr. is the only portable trailer tester carrying a NEMA 4/4X waterproof rating. Most competitors offer no waterproof rating at all and sell a rain cover as a separate accessory. That matters for anyone working in a wet shop, outdoors, or roadside.",
      },
    ],
  },
  {
    title: "Where and How You Can Use It",
    icon: "place",
    items: [
      {
        question: "Can Trailer Dr. be used for trailer PM inspections?",
        answer:
          "Yes. Trailer Dr. is built for preventative maintenance work. A single technician can run a complete PM inspection of a trailer’s lights, electrical connections, ABS, air supply, and brake activation in one trip around the trailer. No truck, no second technician, no extra paperwork tied to a software subscription.",
      },
      {
        question: "Can Trailer Dr. be used for DOT pre-trip and post-trip inspections?",
        answer:
          "Yes. Trailer Dr. tests the systems that DOT and CVSA inspectors check most often, including brake activation, air supply, ABS function, and trailer lighting. Verifying these systems before the trailer leaves the yard helps fleets avoid out-of-service violations and roadside delays.",
      },
      {
        question: "Can Trailer Dr. be used for roadside diagnostics?",
        answer:
          "Yes. With a service truck supplying 115V power and shop air, Trailer Dr. runs the same electrical and air brake tests on field calls and roadside breakdowns that it runs in the shop. The waterproof rating means it can be used in rain or wet conditions without concern for the unit.",
      },
      {
        question: "Can Trailer Dr. be mounted in a service truck?",
        answer:
          "Yes. Mount Trailer Dr. to a service vehicle with an onboard generator or inverter for power and an onboard air compressor for air, creating a fully capable mobile diagnostic station that goes wherever the truck goes.",
      },
      {
        question: "Will Trailer Dr. work in cold weather?",
        answer:
          "Yes. Trailer Dr. is designed and tested in northern Maine, where winters get serious. The waterproof polycarbonate enclosure and sealed electronics are built to handle cold, ice, salt, and moisture.",
      },
      {
        question: "Will Trailer Dr. work in wet conditions?",
        answer:
          "Yes. The NEMA 4/4X waterproof rating means Trailer Dr. handles hose-down cleaning, rain, wet shop floors, and outdoor field calls. It is the only portable trailer tester rated for these conditions out of the box.",
      },
      {
        question: "Does Trailer Dr. help with DOT inspections?",
        answer:
          "Yes. Brake systems are the leading cause of out-of-service violations at DOT roadside inspections and CVSA Roadcheck events, at around 41 percent. Lighting is the third most common cause, at 14 percent. Trailer Dr. tests both, catching issues in the yard before the trailer rolls.",
      },
    ],
  },
  {
    title: "Support and Service",
    icon: "support_agent",
    items: [
      {
        question: "How do I get support for Trailer Dr.?",
        answer:
          "Email bruce.trailerdr@gmail.com or call (207) 231-4967 to reach Bruce directly. No call center, no ticket queue, no waiting for a technician to call back. Bruce built the unit, so he can answer the question.",
      },
      {
        question: "What is Trailer Dr.’s repair turnaround?",
        answer:
          "48 hours. If a unit needs repair, it ships back to Fort Kent and goes out the door within two business days of arrival. Downtime costs money, and the repair process is built around minimizing it.",
      },
      {
        question: "How do I schedule a demo?",
        answer:
          "Use the contact form at thetrailerdr.com/contact or call (207) 231-4967. Bruce will walk through how Trailer Dr. works, answer questions about the specific application, and show the unit in action.",
      },
    ],
  },
  {
    title: "More Questions About Portable Trailer Testing",
    icon: "help",
    items: [
      {
        question: "What is a portable trailer tester?",
        answer:
          "A portable trailer tester is a self-contained diagnostic tool that lets a technician test a trailer’s lights, electrical wiring, air supply, brake activation, and ABS fault codes without needing a truck or tractor connected to the trailer. The tool supplies power and air directly to the trailer through its standard connectors. Trailer Dr. is one example, designed for one-person operation in shops, yards, and roadside environments.",
      },
      {
        question: "How do you test trailer brakes without a truck?",
        answer:
          "A portable trailer tester supplies air directly to the trailer’s gladhand couplings and controls brake activation. Trailer Dr. supplies up to 125 PSI of self-regulated air and uses a wireless remote to apply and release the brakes from the rear of the trailer. No tractor required.",
      },
      {
        question: "How do you test trailer lights without a truck?",
        answer:
          "A portable trailer tester supplies 12.8 VDC power to the trailer’s 7-way connector and lets a technician activate each lighting circuit independently. Trailer Dr. delivers 30 amps of power and gives control of brake lights, turn signals, running lights, and marker lights from a wireless remote.",
      },
      {
        question: "What causes the most trailer DOT inspection failures?",
        answer:
          "According to CVSA data, brake systems are the leading cause of out-of-service violations at roadside inspections, accounting for about 41 percent of failures. Lighting defects are the third most common cause at 14 percent. Both are testable in a yard or shop before the trailer leaves.",
      },
      {
        question: "Do I need a tablet to test trailer ABS?",
        answer:
          "No. ABS fault codes can be read through industry-standard blink codes that have been part of the PLC ABS protocol for decades. Trailer Dr. reads these codes directly without a tablet, without a smartphone, and without proprietary software. Some competitors require a rugged tablet and Bluetooth pairing; Trailer Dr. leaves that complexity out.",
      },
    ],
  },
];

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’'?.]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function slugifySection(title: string): string {
  return `faq-${slugify(title)}`;
}
