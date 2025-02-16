const initialContent = [
  ' 📧 <a href="mailto:if-otherwise@pm.me" class="link">if-otherwise@pm.me</a>',
  ' 📞 <a href="tel:+12159953055">(215) 995-3055</a>',
  '🌎 Philadelphia, PA',
  '<span class="glitch">Founder & Chief Engineer, NeuMe (2023-2025)</span>',
  '<span>● Invented a brain-computer interface suite that converts EEG signals to arbitrary functions</span>',
  '<span>● Using open-source hardware & in-house Machine Learning</span>',
  '<span>● Integrations include mental health/physical assistance, creative tools, gaming</span>',
  '<span>● <a href="https://neu.me" class="link" target="_blank">https://neu.me</a></span>',
  '<span class="glitch">Chief Information Officer (CIO), Fluent Finance (2021-2023)</span>',
  '<span>● Spearheaded security/compliance: SOC 2 (Type 1 & 2) and ISO/IEC 27001 audits</span>',
  '<span>● Engineered secure banking systems compliant with SOC, ISO 27001, NIST, HIPAA, GDPR</span>',
  '<span>● Directed operational efficiency initiatives across departments</span>',
  '<span>● Implemented 100+ Governance Policies for risk management</span>',
  '<span class="glitch">Head of Product & Development, Fluent Finance (2020-2021)</span>',
  '<span>● Led engineering teams in end-to-end code development across simultaneous projects</span>',
  '<span>● Orchestrated cross-department collaboration for project execution</span>',
  '<span>● Secured $5M+ in investment capital</span>',
  '<span class="glitch">Co-Founder & CTO, Nest Financial Group (2014-2020)</span>',
  '<span>● Engineered first digital & US Tribal Special Economic Zone (SEZ) with Catawba Tribe</span>',
  '<span>● Architected globally scalable SEZ platform with robust security protocols</span>',
  '<span>● Built and led development team for core platform architecture</span>',
  '<span class="glitch">Freelance Developer (2012-2014)</span>',
  '<span>● Designed and developed student directory platform for Northwestern University Kellogg School of Management</span>',
  '<span>● Historical Monument/Artifact directory platform for University of North Carolina Chapel Hill History Department</span>',
  '<span class="glitch">TECHNICAL EXPERTISE:</span>',
  '<span>● Languages: Python, JavaScript/TypeScript, Java, C++, Go, PHP, Swift</span>',
  '<span>● Frameworks: React, Vue.js, Angular, Node.js, Express, Django, Spring Boot</span>',
  '<span>● Databases: PostgreSQL, MySQL, MongoDB, DynamoDB</span>',
  '<span>● Cloud: AWS, Azure, GCP</span>',
  '<span>● ML: CNNs, Regression, Classification, Clustering, BCI Systems</span>',
  '<span>● DevOps: Docker, Kubernetes</span>',
  '<span class="glitch">CYBERSECURITY:</span>',
  '<span>● Compliance: SOC 2, ISO 27001, NIST 800-53, HIPAA, GDPR, HITRUST</span>',
  '<span>● Practices: Secure SDLC, Threat Modeling, Security Audits, IAM</span>',
  '<span>● Testing: Penetration Testing, Vulnerability Scanning, Code Analysis</span>',
  '<span>● Incident Handling: SIEM, Security Automation, Disaster Recovery</span>',
  '<span class="glitch">PROJECT MANAGEMENT:</span>',
  '<span>● Methodologies: Scrum, Kanban, Agile, Waterfall, PMP</span>',
  '<span>● Tools: Jira, Confluence, Azure DevOps, Asana, MS Project</span>',
  '<span>● Skills: Team Leadership, Stakeholder Management, Risk Mitigation</span>',
];

let userInput = '';
let promptElement;
let cursorElement;
let currentInputStage = null;
let userName = '';
let userEmail = '';
let userMessage = '';
let mathQuestion = '';
let mathAnswer = 0;
let hasTyped = false;

const terminalContent = document.getElementById('terminal-content');

function printPrompt() {
  const existingPrompt = terminalContent.querySelector('.prompt');
  const existingCursor = terminalContent.querySelector('.cursor');
  if (existingPrompt) {
    existingPrompt.remove();
  }
  if (existingCursor) {
    existingCursor.remove();
  }
  promptElement = document.createElement('span');
  promptElement.classList.add('prompt');
  promptElement.dataset.content = 'root@mt:~#';
  promptElement.textContent = '';
  terminalContent.appendChild(promptElement);

  cursorElement = document.createElement('span');
  cursorElement.classList.add('cursor');
  cursorElement.textContent = '█';
  terminalContent.appendChild(cursorElement);
}

function generateMathQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  switch (operator) {
    case '+':
      mathAnswer = num1 + num2;
      break;
    case '-':
      mathAnswer = num1 - num2;
      break;
    case '*':
      mathAnswer = num1 * num2;
      break;
  }

  mathQuestion = `What is ${num1} ${operator} ${num2}?`;
  return mathQuestion;
}

function printToTerminal(text) {
  const line = document.createElement('div');
  line.classList.add('line');
  line.innerHTML = text; // Use innerHTML

  const currentPrompt = terminalContent.querySelector('.prompt:last-of-type');
  if (currentPrompt) {
    terminalContent.insertBefore(line, currentPrompt);
  } else {
    terminalContent.appendChild(line);
  }
}

function clearTerminal() {
  const lines = terminalContent.querySelectorAll('.line');
  lines.forEach(line => {
    terminalContent.removeChild(line);
  });
}

async function startContactFlow() {
  currentInputStage = 'name';
  printToTerminal('Please enter your name:');
  printPrompt();
}

const publicKey = 'F-xR9kBu9Lw9qfAg1';
const templateId = 'template_62kz2zi';

async function processInput(input) {
  if (currentInputStage === 'name') {
    userName = input;
    printToTerminal(userName);
    currentInputStage = 'email';
    printToTerminal('Please enter your email:');
    printPrompt();
  } else if (currentInputStage === 'email') {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(input)) {
      printToTerminal('Invalid email address. Please try again.');
      printPrompt();
      return;
    }
    userEmail = input;
    printToTerminal(userEmail);
    currentInputStage = 'message';
    printToTerminal('Please enter your message:');
    printPrompt();
  } else if (currentInputStage === 'message') {
    userMessage = input;
    printToTerminal(userMessage);
    currentInputStage = 'math';
    printToTerminal(generateMathQuestion());
    printPrompt();
  } else if (currentInputStage === 'math') {
    const userAnswer = parseInt(input, 10);
    if (userAnswer === mathAnswer) {
      const templateParams = {
        from_name: userName,
        email: userEmail,
        message: userMessage,
      };

      try {
        printToTerminal('Sending message...');
        const response = await emailjs.send(
          'default_service',
          templateId,
          templateParams,
          publicKey
        );
        printToTerminal(`Message sent successfully!`);
      } catch (error) {
        printToTerminal(`Error sending message: ${error}`);
      } finally {
        currentInputStage = null;
        printPrompt();
      }
    } else {
      printToTerminal(
        'Incorrect answer. Please try the contact command again.'
      );
      currentInputStage = null;
      printPrompt();
    }
  }
}

let typingStarted = false;
let emptyCommandWarning = false;

document.addEventListener('keydown', async function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = userInput.trim();

    if (command === '') {
      if (!emptyCommandWarning) {
        printToTerminal('Command cannot be empty. Please try again.');
        emptyCommandWarning = true;
      }
      return;
    }

    emptyCommandWarning = false;

    printToTerminal(`root@mt:~# ${command}`);

    userInput = '';
    promptElement.textContent = '';
    typingStarted = false;

    if (currentInputStage) {
      await processInput(command);
    } else {
      switch (command) {
        case 'contact':
          startContactFlow();
          break;
        case 'clear':
          clearTerminal();
          printPrompt();
          break;
        case 'help':
          printToTerminal('Available commands:');
          printToTerminal('  michael --info: Display information (default).');
          printToTerminal('  contact: Begin contact process.');
          printToTerminal('  clear: Clear the terminal screen.');
          printToTerminal('  help: List available commands.');
          printPrompt();
          break;
        case 'michael --info':
          clearTerminal();
          initialContent.forEach(item => printToTerminal(item));
          printPrompt();
          break;
        default:
          printToTerminal(`Command not found: ${command}`);
          printPrompt();
      }
    }
    terminalContent.scrollTop = terminalContent.scrollHeight;
  } else if (event.key === 'Backspace') {
    event.preventDefault();
    userInput = userInput.slice(0, -1);
    promptElement.textContent = userInput;
    if (userInput === '') {
      typingStarted = false;
    }
  } else if (event.key.length === 1) {
    event.preventDefault();
    userInput += event.key;
    promptElement.textContent = userInput;
    if (!typingStarted) {
      typingStarted = true;
      terminalContent.scrollTop = terminalContent.scrollHeight;
    }
    emptyCommandWarning = false;
  }
});

initialContent.forEach(item => printToTerminal(item));
printPrompt();
