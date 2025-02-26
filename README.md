<div align="center">
<div>
    <img src="/branding/logo.png" alt="LaTeX TuToR logo (I wonder if that capitalization fucks with screen readers)"/>
</div>

<br>
    
**accelerate your knowledge of LaTeX**

*« erm, achtually -- it's pronounced luhtẽque »*

[Usage](#usage) •
[Credit](#credit) •
[Known Issues](#known-issues) •
[Demo](#demo)
</div>

> [!WARNING]  
> This project was made over the course of ~9 consecutive hours while severely sleep deprived and irritable.
I took it upon myself to do a few minor refactors prior to publishing, however I strongly advise against using
this version before the rewrite built with Rust + Dioxus becomes available.

## Usage
- `yarn run dev` – start development server
- `yarn run build` – build production version of the app
- `yarn run preview` – locally preview production build

## Credit
I would like to thank the following people (in order) (descending):
- [Donald Knuth](https://cs.stanford.edu/~knuth/) - the love of my live. shoutout fr. you a real one.
- [Zoe](https://github.com/wynru) - you made the Hackathon amazing! thank you for showing up and helping as much as you did :\)
- T - you were the absolute goat and you hard carried on the morale department, i wish we could've used your art
- Keith - i had no clue what you were talking about for the duration of the event
- [Gordon Ramsay](branding/the-kitchen-nightmare.jpg)
- [Ruby](https://github.com/engelhartrueben) - you kinda helped, i guess

## Known Issues
Due to issues regarding WebKit and our current implementation of checking the equality of expressions, browsers powered by WebKit are completely non-functioning.

This includes the following:
- Apple desktops/laptops running Safari
- Apple phones running *any browser*

Additionally, this version of LaTeX TuToR lacks reactivity, and thus should not be ran on mobile devices.

## Demo
https://github.com/user-attachments/assets/a3d9dad8-8be6-400c-96c1-6f345b627a21

