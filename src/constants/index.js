import about from "../assets/img/about.jpg";

import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";



export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    title: "My Story Telling",
    desc: ["Incheon Posco Academy"],
    img: about,
    code: "http://icpa.icehs.kr/main.do"
}

export const skillText = [
    {
        title: "프로그래밍.",
        desc: "나는 중학교때부터 프로그래밍에 관해서 배우길 원했었으며 지금도 열심히 공부하려 노력하고 있다. 나보다 잘하는 사람도 많고 나에 대해서 의심하는 순간들이 많지만 앞으로도 주저하지 않고 나아가려 노력할 뿐이다."
    },
    {
        title: "Next.js",
        desc: "이번에 미술 수행평가를 진행하기 위해서 만들 디자인이 무엇인가 없나 생각을 해 보다가 생각난 것이 웹사이트였는데 그 웹사이트를 프로그래밍 할 수 있는 프레임워크로 이 Next.js를 선택하게 되었다. 앞으로도 웹사이트를 개발할 일이 있을지는 모르겠지만 그때가 된다면 더욱 완벽한 웹사이트를 한번 만들어보고 싶다."
    },
    {
        title: "앞으로의 계획이나 목표",
        desc: "나의 목표는 고등학교때 성적을 잘 받고 프록그래밍 관련 활동에 다양하게 참여하여서 고려대학교 컴퓨터공학과를 졸업해서 결국에는 구글에 입사를 홰보는 것이 목표다. "
    }
]


export const portText = [
    {
        num: "01",
        title: "파이썬",
        desc: "파이썬에 대한 전반적인 설명이 달려있는 사이트입니다.",
        img: port01,
        code: "https://namu.wiki/w/Python",
        view: "",
        name: "파이썬 언어",
    },
    {
        num: "02",
        title: "자바스크립트",
        desc: "자바스크립트에 대한 전반적인 설명이 달려있는 사이트입니다.",
        img: port02,
        code: "https://namu.wiki/w/JavaScript?from=자바스크립트",
        view: "",
        name: "자바스크립트 언어",
    },
    {
        num: "03",
        title: "PHP",
        desc: "PHP에 대한 전반적인 설명이 달려있는 사이트입니다.",
        img: port03,
        code: "https://namu.wiki/w/PHP",
        view: "",
        name: "PHP 언어",
    },
    {
        num: "04",
        title: "자바",
        desc: "자바에 대한 전반적인 설명이 달려있는 사이트입니다.",
        img: port04,
        code: "https://namu.wiki/w/Java",
        view: "",
        name: "자바 언어",
    },
];

export const contactText = [
    {
        link: "https://open.kakao.com/o/sKQ7o5Lf",
        title: "KAKAO : chungjunggu",
    },
    {
        link: "mailto:ksa33-23-10303@gclass.ice.go.kr",
        title: "mail : ksa33-23-10303@gclass.ice.go.kr",
    },
];

export const footerText = [
    {
        title: "youtube",
        desc: "제가 올렸던 영상들을 보실 수 있습니다.",
        link: "https://www.youtube.com/channel/UC76vKFUqhdYUcFuOEzqSZNw",
    },
    {
        title: "github",
        desc: "제 깃허브 입니다. 앞으로 개발하는 것들을 올려볼 예정입니다.",
        link: "https://github.com/Chungjunggu",
    }
];
