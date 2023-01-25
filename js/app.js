introAnimation();

let count = 0;

const sectionIds = ["#home-button", "#faq-button", "#contact-us-button", "#our-tutors-button"];
const sectionIdsMobile = ["#home-button-mobile", "#faq-button-mobile", "#contact-us-button-mobile", "#our-tutors-button-mobile"];

const mainSections = $(".main-section-item");
const mainSectionsMobile = $(".main-section-item-mobile");
const descriptionSections = $(".description-section-item");

gsap.set(mainSections, { xPercent: 100 });
gsap.set(mainSections[0], { xPercent: 0 });

gsap.set(mainSectionsMobile, { xPercent: 100 });
gsap.set(mainSectionsMobile[0], { xPercent: 0 });

gsap.set(descriptionSections, { xPercent: 100 });
gsap.set(descriptionSections[0], { xPercent: 0 });

function introAnimation() {
	const timeline = gsap.timeline({
		onComplete: () => {
			clearInterval(blinkCaret);
			gsap.to(".typewriter-text", { borderColor: "transparent", duration: 1, ease: "power1.out" });
			gsap.to(".intro-fade-in", { opacity: 1, duration: 3, ease: "power3.in" });
		},
	});
	blinkCaret = setInterval(() => {
		gsap.fromTo(".typewriter-text", { borderColor: "transparent" }, { borderColor: "#e9e9e9", duration: 0.1, ease: "linear" });
	}, 500);
	timeline.fromTo(".typewriter-text", { width: 0 }, { width: "100%", duration: 2.5, ease: "steps(14)" });
}

$(".menu-item").click(function () {
	$(".menu-item").removeClass("active");
	$(this).addClass("active");
	let oldCount = count;
	count = compareIds();
	if (oldCount > count) {
		gsap.fromTo(mainSections[count], { xPercent: -100 }, { xPercent: 0, duration: 1.2, ease: "power1.out" });
		gsap.fromTo(mainSections[oldCount], { xPercent: 0 }, { duration: 1.2, xPercent: 100, ease: "power1.out" });
		gsap.fromTo(descriptionSections[oldCount], { xPercent: 0 }, { duration: 1.2, xPercent: 100, ease: "power1.out" });
		gsap.fromTo(descriptionSections[count], { xPercent: -100 }, { xPercent: 0, duration: 1.2, ease: "power1.out" });
	} else if (oldCount < count) {
		gsap.fromTo(mainSections[oldCount], { xPercent: 0 }, { duration: 1.2, xPercent: -100, ease: "power1.out" });
		gsap.fromTo(mainSections[count], { xPercent: 100 }, { duration: 1.2, xPercent: 0, ease: "power1.out" });
		gsap.fromTo(descriptionSections[count], { xPercent: 100 }, { duration: 1.2, xPercent: 0, ease: "power1.out" });
		gsap.fromTo(descriptionSections[oldCount], { xPercent: 0 }, { duration: 1.2, xPercent: -100, ease: "power1.out" });
	}
});

$(".mobile-nav").click(function () {
	$(".mobile-nav").removeClass("active-mobile");
	$(this).addClass("active-mobile");
	let oldCount = count;
	count = compareIdsMobile();
	if (oldCount > count) {
		gsap.fromTo(mainSectionsMobile[count], { xPercent: -100 }, { xPercent: 0, duration: 1.2, ease: "power1.out" });
		gsap.fromTo(mainSectionsMobile[oldCount], { xPercent: 0 }, { duration: 1.2, xPercent: 100, ease: "power1.out" });
		gsap.fromTo(descriptionSectionsMobile[oldCount], { xPercent: 0 }, { duration: 1.2, xPercent: 100, ease: "power1.out" });
		gsap.fromTo(descriptionSectionsMobile[count], { xPercent: -100 }, { xPercent: 0, duration: 1.2, ease: "power1.out" });
	} else if (oldCount < count) {
		gsap.fromTo(mainSectionsMobile[oldCount], { xPercent: 0 }, { duration: 1.2, xPercent: -100, ease: "power1.out" });
		gsap.fromTo(mainSectionsMobile[count], { xPercent: 100 }, { duration: 1.2, xPercent: 0, ease: "power1.out" });
		gsap.fromTo(descriptionSectionsMobile[count], { xPercent: 100 }, { duration: 1.2, xPercent: 0, ease: "power1.out" });
		gsap.fromTo(descriptionSectionsMobile[oldCount], { xPercent: 0 }, { duration: 1.2, xPercent: -100, ease: "power1.out" });
	}
});

$(".right-arrow").click(function () {
	if (count < mainSections.length - 1) {
		animate("right");
		count++;
		$(".active").removeClass("active");
		$(sectionIds[count]).addClass("active");
	}
});

$(".left-arrow").click(function () {
	if (count > 0) {
		animate("left");
		count--;
		$(".active").removeClass("active");
		$(sectionIds[count]).addClass("active");
	}
});

function animate(dir) {
	if (dir == "left") {
		gsap.fromTo(mainSections[count - 1], { xPercent: -100 }, { xPercent: 0, duration: 1.2, ease: "power1.out" });
		gsap.fromTo(mainSections[count], { xPercent: 0 }, { duration: 1.2, xPercent: 100, ease: "power1.out" });
		gsap.fromTo(descriptionSections[count], { xPercent: 0 }, { duration: 1.2, xPercent: 100, ease: "power1.out" });
		gsap.fromTo(descriptionSections[count - 1], { xPercent: -100 }, { xPercent: 0, duration: 1.2, ease: "power1.out" });
	} else if (dir == "right") {
		gsap.fromTo(mainSections[count], { xPercent: 0 }, { duration: 1.2, xPercent: -100, ease: "power1.out" });
		gsap.fromTo(mainSections[count + 1], { xPercent: 100 }, { duration: 1.2, xPercent: 0, ease: "power1.out" });
		gsap.fromTo(descriptionSections[count + 1], { xPercent: 100 }, { duration: 1.2, xPercent: 0, ease: "power1.out" });
		gsap.fromTo(descriptionSections[count], { xPercent: 0 }, { duration: 1.2, xPercent: -100, ease: "power1.out" });
	}
}

function compareIds() {
	currentId = "#" + $(".active").attr("id");
	for (let i = 0; i < sectionIds.length; i++) {
		if (currentId == sectionIds[i]) {
			return i;
		}
	}
}

function compareIdsMobile() {
	currentId = "#" + $(".active-mobile").attr("id");
	for (let i = 0; i < sectionIdsMobile.length; i++) {
		if (currentId == sectionIdsMobile[i]) {
			return i;
		}
	}
}
