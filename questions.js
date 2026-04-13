export const questionBank = [
  {
    id: 1,
    category: "Code Administration",
    prompt:
      "Which record should an elevator inspector expect to review to confirm that required periodic testing has been documented at the building?",
    choices: [
      "A maintenance control program log and test records maintained on site",
      "A tenant complaint ledger maintained by property management",
      "A copy of the building's certificate of occupancy only",
      "A fire alarm inspection report from the monitoring company"
    ],
    answer: 0,
    explanation:
      "Periodic tests and maintenance activity should be traceable through the maintenance control program and related on-site records, not through occupancy or unrelated building logs."
  },
  {
    id: 2,
    category: "Safety Devices",
    prompt:
      "What is the primary purpose of a governor in a traction elevator system?",
    choices: [
      "To regulate machine-room temperature",
      "To sense overspeed and trigger the safety mechanism",
      "To balance the counterweight with the car load",
      "To prevent nuisance door reversals"
    ],
    answer: 1,
    explanation:
      "The governor monitors car speed and actuates safeties when overspeed conditions occur."
  },
  {
    id: 3,
    category: "Inspection Procedure",
    prompt:
      "Before beginning an elevator inspection, what is the most appropriate first step?",
    choices: [
      "Ride the car immediately to the top landing",
      "Review site conditions, identify hazards, and coordinate access with responsible personnel",
      "Disable all hall call buttons",
      "Order a full load test without reviewing records"
    ],
    answer: 1,
    explanation:
      "Inspectors should first establish safe conditions, confirm access, and understand the inspection scope before operating equipment."
  },
  {
    id: 4,
    category: "Doors And Interlocks",
    prompt:
      "A hoistway door interlock is intended primarily to:",
    choices: [
      "Keep lobby doors open during peak traffic",
      "Prevent the hoistway door from opening unless the car is properly at the landing",
      "Reduce door operator motor current",
      "Shorten passenger loading time"
    ],
    answer: 1,
    explanation:
      "Interlocks are safety devices that prevent unsafe opening of hoistway doors when the car is not at the landing zone."
  },
  {
    id: 5,
    category: "Machine Room",
    prompt:
      "Which condition in a machine room would most likely be cited as a safety concern?",
    choices: [
      "Clear access paths and labeled disconnects",
      "Adequate lighting and housekeeping",
      "Stored combustible materials near elevator equipment",
      "Updated wiring diagrams in a cabinet"
    ],
    answer: 2,
    explanation:
      "Machine rooms should remain dedicated, orderly, and free from hazardous storage that can interfere with safe operation or emergency access."
  },
  {
    id: 6,
    category: "Hydraulic Systems",
    prompt:
      "What is one common indicator of a hydraulic elevator system issue that may warrant further investigation?",
    choices: [
      "Smooth leveling at each landing",
      "Evidence of oil leakage around system components",
      "Clearly marked car capacity",
      "An operating phone in the car"
    ],
    answer: 1,
    explanation:
      "Visible oil leakage can indicate deteriorated seals, fittings, or other hydraulic system problems."
  },
  {
    id: 7,
    category: "Code Administration",
    prompt:
      "When an inspector observes a hazardous condition that creates an immediate safety concern, the best response is to:",
    choices: [
      "Document it for the next scheduled visit only",
      "Allow continued operation until building occupancy decreases",
      "Follow agency procedure for unsafe conditions and restrict use as required",
      "Ask the janitor to monitor the elevator informally"
    ],
    answer: 2,
    explanation:
      "Immediate hazards require prompt action consistent with DOB or authority procedures, including restricting unsafe equipment from service."
  },
  {
    id: 8,
    category: "Electrical",
    prompt:
      "Why is proper labeling of disconnect means important during an elevator inspection?",
    choices: [
      "It improves passenger wayfinding",
      "It helps ensure equipment can be safely identified and isolated",
      "It increases car speed efficiency",
      "It reduces hall lantern noise"
    ],
    answer: 1,
    explanation:
      "Clear disconnect labeling supports safe maintenance, emergency shutdown, and code compliance."
  },
  {
    id: 9,
    category: "Inspection Procedure",
    prompt:
      "If the car does not level accurately at a landing, the inspector should be concerned because poor leveling can:",
    choices: [
      "Create a trip hazard for passengers entering or exiting",
      "Improve freight loading rates",
      "Decrease door dwell time automatically",
      "Reduce machine room ventilation"
    ],
    answer: 0,
    explanation:
      "Improper leveling is a direct passenger safety issue because it can create vertical misalignment at the threshold."
  },
  {
    id: 10,
    category: "Safety Devices",
    prompt:
      "The final terminal stopping device is intended to:",
    choices: [
      "Control music volume in the car",
      "Stop the car before it travels beyond safe terminal limits",
      "Synchronize multiple cars during group operation",
      "Hold doors open during inspections"
    ],
    answer: 1,
    explanation:
      "Final terminal stopping devices are designed to prevent dangerous overtravel at the ends of the hoistway."
  },
  {
    id: 11,
    category: "Maintenance Records",
    prompt:
      "Which documentation best helps verify that recurring maintenance tasks are being performed under an MCP?",
    choices: [
      "A handwritten lobby sign-in sheet",
      "A maintenance task schedule with dated service entries",
      "A copy of the original equipment sales brochure",
      "The building superintendent's vacation calendar"
    ],
    answer: 1,
    explanation:
      "Dated service entries tied to a maintenance schedule provide evidence that recurring tasks are being performed and tracked."
  },
  {
    id: 12,
    category: "Doors And Interlocks",
    prompt:
      "A door reopening device on a passenger elevator is primarily intended to:",
    choices: [
      "Stop car motion at top terminal only",
      "Prevent the doors from closing on a passenger or object",
      "Increase door-closing force when traffic is heavy",
      "Lock the car doors during fire service"
    ],
    answer: 1,
    explanation:
      "Door reopening devices detect people or objects and reopen or hold the doors to prevent contact injuries."
  },
  {
    id: 13,
    category: "Machine Room",
    prompt:
      "Which condition would most likely indicate poor housekeeping in the machine room?",
    choices: [
      "Equipment identification plates are visible",
      "The floor is obstructed by debris and stored items",
      "The disconnect switch is accessible",
      "The room is locked from unauthorized entry"
    ],
    answer: 1,
    explanation:
      "Debris and unrelated storage can obstruct access, create hazards, and violate the requirement for orderly machine-room conditions."
  },
  {
    id: 14,
    category: "Electrical",
    prompt:
      "Why should damaged flexible traveling cable insulation be addressed promptly?",
    choices: [
      "It can create electrical hazards and unreliable car operation",
      "It makes the cab interior less attractive",
      "It improves dispatching speed",
      "It reduces counterweight noise"
    ],
    answer: 0,
    explanation:
      "Traveling cable damage can expose conductors, create intermittent faults, and present safety risks."
  },
  {
    id: 15,
    category: "Hydraulic Systems",
    prompt:
      "A hydraulic elevator that drifts downward noticeably while parked may indicate:",
    choices: [
      "Normal behavior requiring no action",
      "A possible issue with the control valve or hydraulic sealing",
      "Improved leveling performance",
      "An overspeed governor trip"
    ],
    answer: 1,
    explanation:
      "Downward drift can signal leakage or valve problems affecting the system's ability to hold position."
  },
  {
    id: 16,
    category: "Code Administration",
    prompt:
      "What is the strongest reason to verify car capacity signage during inspection?",
    choices: [
      "Passengers prefer decorative placards",
      "Capacity information supports safe loading and code compliance",
      "It determines the building's tax classification",
      "It replaces the need for maintenance logs"
    ],
    answer: 1,
    explanation:
      "Capacity signage is required so users and operators understand the safe load limit."
  },
  {
    id: 17,
    category: "Safety Devices",
    prompt:
      "Buffers located in the pit are intended to:",
    choices: [
      "Protect equipment from impact at the extremes of travel",
      "Reduce lobby noise from hall doors",
      "Control ventilation to the hoistway",
      "Provide power to emergency lighting"
    ],
    answer: 0,
    explanation:
      "Buffers provide a protective stopping medium if the car or counterweight reaches the end of travel."
  },
  {
    id: 18,
    category: "Inspection Procedure",
    prompt:
      "Why is communication with the mechanic or responsible site representative important during inspection?",
    choices: [
      "It avoids the need for documentation",
      "It helps coordinate safe testing conditions and access to equipment areas",
      "It eliminates the need for visual inspection",
      "It guarantees the equipment will pass"
    ],
    answer: 1,
    explanation:
      "Safe inspection depends on coordinated access, system status awareness, and clear communication with responsible personnel."
  },
  {
    id: 19,
    category: "Maintenance Records",
    prompt:
      "If required records are missing or incomplete, an inspector should generally:",
    choices: [
      "Ignore the issue if the elevator rides smoothly",
      "Treat the missing documentation as a compliance concern",
      "Assume the records exist off-site and close the inspection",
      "Replace the records personally"
    ],
    answer: 1,
    explanation:
      "Missing required records can itself be a violation because it prevents verification of code-mandated maintenance and testing."
  },
  {
    id: 20,
    category: "Doors And Interlocks",
    prompt:
      "Excessive clearance at a sliding door sill is a concern because it may:",
    choices: [
      "Increase traction sheave diameter",
      "Create an entrapment or safety hazard",
      "Improve passenger flow",
      "Reduce lighting demand"
    ],
    answer: 1,
    explanation:
      "Improper clearances can contribute to passenger risk or indicate worn or misadjusted door components."
  },
  {
    id: 21,
    category: "Machine Room",
    prompt:
      "Why should unauthorized personnel be kept out of the machine room?",
    choices: [
      "To preserve elevator dispatch settings only",
      "Because the room contains hazardous equipment requiring controlled access",
      "To improve Wi-Fi performance",
      "Because storage space is limited"
    ],
    answer: 1,
    explanation:
      "Machine rooms contain energized and moving equipment that require restricted access for safety."
  },
  {
    id: 22,
    category: "Electrical",
    prompt:
      "A missing cover on an electrical junction box associated with elevator equipment is primarily a problem because it:",
    choices: [
      "Improves ventilation too much",
      "Can expose wiring and increase shock or fault risk",
      "Changes the elevator's rated speed",
      "Makes the controller easier to clean"
    ],
    answer: 1,
    explanation:
      "Exposed electrical components create safety hazards and can compromise equipment reliability."
  },
  {
    id: 23,
    category: "Hydraulic Systems",
    prompt:
      "What is the main function of the relief valve in a hydraulic elevator system?",
    choices: [
      "Prevent the system from exceeding safe pressure",
      "Control car interior lighting",
      "Stop door nudging operation",
      "Reduce hall call demand"
    ],
    answer: 0,
    explanation:
      "The relief valve limits pressure to protect hydraulic components and support safe operation."
  },
  {
    id: 24,
    category: "Code Administration",
    prompt:
      "Why is it important to distinguish between a code issue and a minor cosmetic defect during inspection?",
    choices: [
      "Cosmetic issues always require shutdown",
      "Accurate classification supports consistent enforcement and safety decisions",
      "Cosmetic issues replace testing requirements",
      "Code issues only matter in new construction"
    ],
    answer: 1,
    explanation:
      "Inspectors need to distinguish genuine safety or compliance issues from non-code cosmetic conditions to apply requirements appropriately."
  },
  {
    id: 25,
    category: "Safety Devices",
    prompt:
      "Emergency communication equipment in the car is important because it:",
    choices: [
      "Lets passengers order maintenance supplies",
      "Provides a way to request assistance if passengers become trapped",
      "Replaces the need for alarm bells",
      "Allows faster group dispatching"
    ],
    answer: 1,
    explanation:
      "Passengers must be able to summon help if they are stranded or experience an emergency."
  }
];
