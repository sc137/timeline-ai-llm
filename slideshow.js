// Short, original summaries for the slideshow. Paper summaries are paraphrases,
// and the linked publication remains the source for its original text.
const slideDetails = {
    'Shannon Founds Information Theory': {
        label: 'Paper overview',
        text: 'Shannon models communication as sending a message through a channel. He defines information mathematically, relates it to uncertainty, and establishes limits for transmitting data when a channel has noise.'
    },
    "Turing's Foundational Question": {
        label: 'Paper overview',
        text: 'Turing replaces the vague question of whether machines can think with the imitation game. He considers digital computers, objections to machine intelligence, and the possibility of learning machines.'
    },
    'Dartmouth Workshop — Birth of AI': {
        heading: 'The workshop organizers',
        text: 'John McCarthy proposed the name “artificial intelligence.” Marvin Minsky, Nathaniel Rochester, and Claude Shannon joined him in organizing the 1956 summer research project.'
    },
    'The Perceptron': {
        label: 'Abstract summary',
        text: 'Rosenblatt proposes a probabilistic model of information storage and recognition. The perceptron uses adjustable connections to learn how to classify input patterns from examples.'
    },
    'SAIL Founded': {
        heading: 'People behind SAIL',
        text: 'John McCarthy led research on artificial intelligence at Stanford. Les Earnest helped establish and manage the laboratory, which became a home for work on robotics, vision, and symbolic AI.'
    },
    'ELIZA Chatbot': {
        label: 'Abstract summary',
        text: 'Weizenbaum describes a program that analyzes typed input and uses a script to assemble replies. ELIZA demonstrates how pattern matching can sustain a conversation without understanding its subject.'
    },
    'Robotic Breakthroughs: Stanford Arm & Shakey': {
        heading: 'People and projects',
        text: 'Victor Scheinman designed the Stanford Arm for computer-controlled manipulation. At SRI, the Shakey project combined perception, planning, and movement in a mobile robot.'
    },
    'AI Funding Reduction (First AI Winter)': {
        heading: 'The Lighthill report',
        text: 'James Lighthill’s review of AI research was influential in the United Kingdom. It questioned whether the field’s results justified its broad promises, contributing to a period of tighter support.'
    },
    'Expert Systems Boom': {
        heading: 'The systems',
        text: 'MYCIN applied rules to medical diagnosis research. XCON used rules to configure computer orders. Both showed how specialists’ knowledge could be encoded for a narrow task.'
    },
    'Backpropagation Revolution': {
        label: 'Abstract summary',
        text: 'Rumelhart, Hinton, and Williams describe a learning procedure that adjusts network weights to reduce output errors. Hidden units then develop internal representations of useful features.'
    },
    'LeNet & Convolutional Neural Networks': {
        label: 'Abstract summary',
        text: 'LeCun and colleagues train a multilayer network to recognize handwritten ZIP code digits. Their approach combines local feature detection with backpropagation and illustrates practical document recognition.'
    },
    'Deep Blue vs. Kasparov': {
        heading: 'The match',
        text: 'Garry Kasparov was the reigning world chess champion. IBM’s Deep Blue team combined specialized hardware, search, and expert chess evaluation to win the 1997 rematch.'
    },
    'Long Short-Term Memory (LSTM)': {
        label: 'Abstract summary',
        text: 'Hochreiter and Schmidhuber introduce memory cells designed to preserve useful error signals over long sequences. Input and output gates help the network learn dependencies that ordinary recurrent networks struggled to capture.'
    },
    'ImageNet Dataset Released': {
        label: 'Abstract summary',
        text: 'Deng, Dong, Socher, Li, Li, and Fei-Fei Li describe a large image database organized around WordNet concepts. Its scale and labels make it useful for training and evaluating visual recognition systems.'
    },
    'DeepMind Founded': {
        heading: 'The founders',
        text: 'Demis Hassabis, Shane Legg, and Mustafa Suleyman founded DeepMind. The company brought together machine learning, neuroscience, and reinforcement learning research.'
    },
    'AlexNet Wins ImageNet': {
        label: 'Abstract summary',
        text: 'Krizhevsky, Sutskever, and Hinton train a large convolutional network on ImageNet. GPU computation and techniques to speed training and reduce overfitting produce a major improvement in image classification.'
    },
    'Google Acquires DeepMind': {
        heading: 'What changed',
        text: 'The acquisition joined DeepMind’s research group with Google’s computing infrastructure. DeepMind continued to pursue general-purpose learning systems within Google.'
    },
    'Generative Adversarial Networks (GANs)': {
        label: 'Abstract summary',
        text: 'Goodfellow and colleagues propose training two models together: a generator produces samples, and a discriminator tries to distinguish them from real data. Their competition improves the generator.'
    },
    'ResNet (Deep Residual Learning)': {
        label: 'Abstract summary',
        text: 'He and colleagues use shortcut connections so network layers learn changes to their input rather than an entire transformation. This makes much deeper image recognition networks easier to train.'
    },
    'AlphaGo Defeats Lee Sedol': {
        label: 'Abstract summary',
        text: 'The linked paper describes a Go program that combines neural networks for move selection and position evaluation with tree search. It reports strong play against other programs and a professional player.'
    },
    'Transformer Architecture Introduced': {
        label: 'Abstract summary',
        text: 'Vaswani and colleagues introduce the Transformer, a sequence model built around attention instead of recurrence or convolution. It trains efficiently and achieves strong machine translation results.'
    },
    'BERT Released': {
        label: 'Abstract summary',
        text: 'Devlin and colleagues pretrain bidirectional Transformer representations from unlabeled text, then fine-tune them for individual language tasks. The method improves results across several question-answering and language-understanding benchmarks.'
    },
    'GPT-2 & Emergent Scaling': {
        label: 'Abstract summary',
        text: 'The report studies a large language model trained to predict the next word in web text. It shows the model performing several language tasks from prompts without task-specific training.'
    },
    'GPT-3 and AlphaFold 2': {
        label: 'Abstract summary',
        text: 'The linked GPT-3 paper evaluates a 175-billion-parameter language model on tasks described through prompts and a few examples. It reports strong few-shot performance while also discussing important limitations.'
    },
    '"Stochastic Parrots" Paper': {
        label: 'Abstract summary',
        text: 'Bender, Gebru, McMillan-Major, and Mitchell examine the costs and risks of increasingly large language models. They call for attention to training data, environmental costs, bias, and the difference between fluent text and understanding.'
    },
    'Anthropic Founded': {
        heading: 'The founders',
        text: 'Dario and Daniela Amodei were among the former OpenAI staff who founded Anthropic. The lab made AI safety and the behavior of large models central parts of its research.'
    },
    'ChatGPT Goes Public': {
        label: 'Announcement context',
        text: 'OpenAI’s launch post introduces ChatGPT as a conversational model that can respond to follow-up questions and acknowledge mistakes. It also describes limitations, including plausible but incorrect answers.'
    },
    'GPT-4 Frontier Multimodality': {
        label: 'Abstract summary',
        text: 'The technical report describes GPT-4’s text and image input capabilities, exam and benchmark results, and safety work. It also documents limitations such as hallucinations and remaining reliability problems.'
    },
    'LLaMA & Open-Source LLM Surge': {
        label: 'Abstract summary',
        text: 'The linked LLaMA paper presents a family of language models trained on publicly available data. It examines how substantial training data can make smaller models competitive with larger alternatives.'
    },
    'Google DeepMind & Gemini 1.0': {
        label: 'Abstract summary',
        text: 'The Gemini report presents a family of multimodal models and evaluates them across language, reasoning, image, audio, and video tasks. It also describes the training and safety evaluations used for the release.'
    },
    'Sora & Diffusion Transformers (DiT)': {
        label: 'Abstract summary',
        text: 'The linked DiT paper predates Sora. It studies replacing a diffusion model’s usual backbone with a Transformer and finds that scaling Transformer compute improves image generation quality.'
    },
    'Test-Time Compute & OpenAI o1': {
        label: 'Article context',
        text: 'OpenAI’s article introduces o1 models trained to spend more time reasoning before responding. It reports improvements on selected math, coding, and science evaluations and discusses safety testing.'
    },
    'Nobel Prizes Awarded for AI': {
        label: 'Press release context',
        text: 'The linked Nobel press release covers the 2024 Physics Prize awarded to John Hopfield and Geoffrey Hinton for foundational work on machine learning with artificial neural networks.'
    },
    'Agentic Computer Use & Claude 3.5 Sonnet': {
        label: 'Announcement context',
        text: 'Anthropic’s announcement describes a computer-use capability that lets Claude interact with a screen through tool actions. It presents the feature as a beta and discusses its limitations.'
    },
    'DeepSeek-R1 & Open Reasoning': {
        label: 'Abstract summary',
        text: 'The DeepSeek-R1 paper studies reinforcement learning for reasoning and presents models that improve through this training. It also describes distilled smaller models and reports benchmark results.',
        related: {
            heading: 'AI-stock sell-off · January 27, 2025',
            text: 'DeepSeek’s lower-cost AI model prompted a sharp sell-off in AI-related stocks. Nvidia fell nearly 17%, erasing about $593 billion in market value—the largest one-day loss for a public company at the time. The Nasdaq Composite fell 3.1%.',
            url: 'https://www.moneycontrol.com/news/business/deepseek-sparks-ai-stock-selloff-nvidia-posts-record-market-cap-loss-12920851.html',
            linkText: 'Read Reuters market report ↗'
        }
    },
    'Hybrid Reasoning & Autonomous Agent Ecosystems': {
        heading: 'Further context',
        text: 'Hybrid systems can choose between a quick answer and a longer reasoning pass. Coding agents can also use tools in a loop: inspect files, make a change, run checks, and revise their work.'
    },
    'Physical AI & Humanoid Robotics': {
        heading: 'The organizations',
        text: 'Figure, Tesla, and Boston Dynamics are among the organizations developing humanoid robots. Vision-language-action models aim to connect perception and language instructions with physical movement.'
    },
    'Closed-Loop Autonomous Science': {
        heading: 'Further context',
        text: 'A closed-loop research system proposes an experiment, collects results, and uses those results to choose the next experiment. Robotics and AI models can support different parts of that cycle.'
    }
};

const timelineEvents = Array.from(document.querySelectorAll('.timeline-event'));
const slideshow = document.getElementById('slideshow');
const slideshowLaunch = document.getElementById('slideshowLaunch');
const slideExit = document.getElementById('slideExit');
const slidePrevious = document.getElementById('slidePrevious');
const slideNext = document.getElementById('slideNext');
const slideProgress = document.getElementById('slideProgress');
const slideYear = document.getElementById('slideYear');
const slideEra = document.getElementById('slideEra');
const slideTitle = document.getElementById('slideTitle');
const slideDescription = document.getElementById('slideDescription');
const slideSideLabel = document.getElementById('slideSideLabel');
const slideSideHeading = document.getElementById('slideSideHeading');
const slideSideText = document.getElementById('slideSideText');
const slideSource = document.getElementById('slideSource');
const slideSourceText = document.getElementById('slideSourceText');
const slideRelated = document.getElementById('slideRelated');
const slideRelatedHeading = document.getElementById('slideRelatedHeading');
const slideRelatedText = document.getElementById('slideRelatedText');
const slideRelatedLink = document.getElementById('slideRelatedLink');
const slideRelatedLinkText = document.getElementById('slideRelatedLinkText');
const backgroundElements = [document.querySelector('.container'), document.querySelector('.theme-toggle'), document.querySelector('.skip-link')];

let currentSlide = 0;
let returnFocus = slideshowLaunch;

function showSlide(index) {
    currentSlide = Math.max(0, Math.min(index, timelineEvents.length - 1));
    const event = timelineEvents[currentSlide];
    const title = event.querySelector('.timeline-title').textContent;
    const paper = event.querySelector('.paper-badge');
    const details = slideDetails[title];
    slideshow.dataset.era = Array.from(event.classList).find(name => name.startsWith('era-')).slice(4);

    slideYear.textContent = event.querySelector('.timeline-year').textContent;
    slideEra.textContent = event.querySelector('.timeline-era').textContent;
    slideTitle.textContent = title;
    slideDescription.textContent = event.querySelector('.timeline-description').textContent;
    slideProgress.textContent = `Step ${currentSlide + 1} of ${timelineEvents.length}`;
    slideSideText.textContent = details.text;

    if (paper) {
        slideSideLabel.textContent = details.label;
        slideSideHeading.textContent = paper.querySelector('.paper-title').textContent;
        slideSource.href = paper.href;
        slideSourceText.textContent = details.label === 'Abstract summary' || details.label === 'Paper overview' ? 'Read paper ↗' : 'Open source ↗';
        slideSource.hidden = false;
    } else {
        slideSideLabel.textContent = 'Additional information';
        slideSideHeading.textContent = details.heading;
        slideSource.hidden = true;
        slideSource.removeAttribute('href');
    }

    slideRelated.hidden = !details.related;
    slideRelatedLink.hidden = !details.related;
    if (details.related) {
        slideRelatedHeading.textContent = details.related.heading;
        slideRelatedText.textContent = details.related.text;
        slideRelatedLink.href = details.related.url;
        slideRelatedLinkText.textContent = details.related.linkText;
    } else {
        slideRelatedLink.removeAttribute('href');
    }

    slidePrevious.disabled = currentSlide === 0;
    slideNext.disabled = currentSlide === timelineEvents.length - 1;
    document.querySelector('.slideshow-stage').scrollTop = 0;
    document.querySelector('.slideshow-main').scrollTop = 0;
    document.querySelector('.slideshow-side').scrollTop = 0;
    slideTitle.focus();
}

function openSlideshow() {
    if (!slideshow.hidden) return;
    returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : slideshowLaunch;
    slideshow.hidden = false;
    document.body.classList.add('slideshow-open');
    backgroundElements.forEach(element => { element.inert = true; });
    showSlide(0);
}

function closeSlideshow() {
    if (slideshow.hidden) return;
    slideshow.hidden = true;
    document.body.classList.remove('slideshow-open');
    backgroundElements.forEach(element => { element.inert = false; });
    (returnFocus === document.body ? slideshowLaunch : returnFocus).focus();
}

slideshowLaunch.addEventListener('click', openSlideshow);
slideExit.addEventListener('click', closeSlideshow);
slidePrevious.addEventListener('click', () => showSlide(currentSlide - 1));
slideNext.addEventListener('click', () => showSlide(currentSlide + 1));

document.addEventListener('keydown', event => {
    if (slideshow.hidden) {
        const target = event.target;
        if (event.key.toLowerCase() === 's' && !event.altKey && !event.ctrlKey && !event.metaKey &&
            !(target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)))) {
            event.preventDefault();
            openSlideshow();
        }
        return;
    }

    if (event.key === 'Escape' || (event.key.toLowerCase() === 'q' && !event.altKey && !event.ctrlKey && !event.metaKey)) {
        event.preventDefault();
        closeSlideshow();
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        showSlide(currentSlide + (event.key === 'ArrowRight' ? 1 : -1));
    } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        showSlide(event.key === 'Home' ? 0 : timelineEvents.length - 1);
    } else if (event.key === 'Tab') {
        const focusable = Array.from(slideshow.querySelectorAll('button:not(:disabled), a:not([hidden])'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === slideTitle)) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});
