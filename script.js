// JAVASCRIPT LOGIC - BMW LUXURY WEBSITE

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Initialize GSAP ScrollTrigger
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // Section 1: Hero Animations
        gsap.from("#hero-sub", { opacity: 0, y: -20, duration: 1, delay: 0.2 });
        gsap.from("#hero-title", { opacity: 0, scale: 0.9, duration: 1.2, delay: 0.4 });
        gsap.from("#hero-desc", { opacity: 0, y: 20, duration: 1, delay: 0.6 });
        gsap.from("#hero-cta", { opacity: 0, y: 30, duration: 1, delay: 0.8 });

        // Hero Parallax Background
        gsap.to("#hero-bg", {
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 120,
            scale: 1.15
        });

        // Section 2: Counter Up Animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            gsap.to(counter, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                }
            });
        });

        // Section 4: Scroll Storytelling Image Swap
        const storyBlocks = document.querySelectorAll('.story-block');
        const stickyImg = document.getElementById('story-sticky-img');

        storyBlocks.forEach(block => {
            ScrollTrigger.create({
                trigger: block,
                start: "top 60%",
                end: "bottom 60%",
                onEnter: () => updateStoryImage(block.dataset.img),
                onEnterBack: () => updateStoryImage(block.dataset.img)
            });
        });
    }
});

// Helper for Story Image Transition
function updateStoryImage(src) {
    const stickyImg = document.getElementById('story-sticky-img');
    if (!stickyImg) return;
    stickyImg.style.opacity = '0.2';
    setTimeout(() => {
        stickyImg.src = src;
        stickyImg.style.opacity = '1';
    }, 200);
}

// 3. Section 3: Interactive Lineup Data & Handler
const carsData = {
    x5: { name: "BMW X5", hp: "381 HP", torque: "540 Nm", acc: "5.4s", price: "Từ 3.800.000.000 VNĐ", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop" },
    x7: { name: "BMW X7", hp: "530 HP", torque: "750 Nm", acc: "4.7s", price: "Từ 5.200.000.000 VNĐ", img: "https://imgs.search.brave.com/d0kEZRTmdYn-Ow_upyC9Pb4d8PEOjCP0uIgnN9ShqlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTUy/NDUzNS5qcGc" },
    m4: { name: "BMW M4 Competition", hp: "510 HP", torque: "650 Nm", acc: "3.9s", price: "Từ 5.600.000.000 VNĐ", img: "https://imgs.search.brave.com/8uVEbPxFP7ZRFVgRCNCcze5AyXpzra1AQoXgK-Rslew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzEwNTZ4NTk0L24v/Y3cvZWMvMTg4MzI5/L2Jtdy1tNC1jb21w/ZXRpdGlvbi1yaWdo/dC1mcm9udC10aHJl/ZS1xdWFydGVyMC5q/cGVnP2lzaWc9MCZx/PTgwJndtPTE" },
    xm: { name: "BMW XM", hp: "653 HP", torque: "800 Nm", acc: "3.8s", price: "Từ 10.999.000.000 VNĐ", img: "https://imgs.search.brave.com/Ci-SsSJ1OHwgJof3kgp2hUHV-TtTaaywNkX_bZeClI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/czMuYXV0b2Nhcmlu/ZGlhLmNvbS9sZWdh/Y3kvY2RuaS9HYWxs/ZXJpZXMvMjAyMzA0/MTIxMDU2MDlfUDkw/NDk5ODA3X2hpZ2hS/ZXNfdGhlX2Jtd194/bV9sYWJlbF9yZWQu/anBnP3c9NzI4JnE9/NzU" }
};

function selectCar(key) {
    document.querySelectorAll('.car-tab-btn').forEach(btn => {
        btn.classList.remove('border-amber-400');
        btn.classList.add('border-transparent');
    });
    const activeBtn = document.getElementById(`btn-${key}`);
    if (activeBtn) activeBtn.classList.remove('border-transparent');
    if (activeBtn) activeBtn.classList.add('border-amber-400');

    const car = carsData[key];
    const img = document.getElementById('lineup-img');
    if (!img || !car) return;

    img.style.opacity = '0';
    setTimeout(() => {
        document.getElementById('lineup-title').innerText = car.name;
        document.getElementById('lineup-hp').innerText = car.hp;
        document.getElementById('lineup-torque').innerText = car.torque;
        document.getElementById('lineup-acc').innerText = car.acc;
        document.getElementById('lineup-price').innerText = car.price;
        img.src = car.img;
        img.style.opacity = '1';
    }, 250);
}

// 4. Section 5: 360 Viewer (Drag Simulation)
const container360 = document.getElementById('viewer-container');
const img360 = document.getElementById('viewer-img');
let isDragging = false;
let startX = 0;
let rotation = 0;

if (container360 && img360) {
    container360.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    window.addEventListener('mouseup', () => isDragging = false);

    container360.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        rotation += deltaX * 0.15;
        img360.style.transform = `scale(1.05) rotateY(${rotation}deg)`;
        startX = e.clientX;
    });
}
function switch3DModel(carModelKey) {
    // 1. Cập nhật đường dẫn file 3D cho <model-viewer>
    const viewer = document.getElementById('main-3d-viewer');
    
    // Khai báo sẵn kho chứa các file 3D
    const modelsData = {
        'x5': 'model/bmw_x5_2024.glb',
        'x7': 'model/bmw_x7.glb',
        'm4': 'model/bmw_m4.glb',
        'xm': 'model/bmw_xm.glb'
    };
    
    // Nếu tìm thấy file 3D trong kho thì gán vào src
    if (modelsData[carModelKey]) {
        viewer.src = modelsData[carModelKey];
    }

    // 2. Cập nhật hiệu ứng màu sắc cho Nút Bấm
    // Tìm tất cả các nút có class là '3d-tab-btn'
    const buttons = document.querySelectorAll(".car-tab-btn");
    console.log(document.querySelectorAll(".car-tab-btn"));
    // Tắt đèn màu vàng (amber) của tất cả các nút, trả về màu xám
    buttons.forEach(btn => {
        btn.classList.remove('border-amber-400', 'text-white', 'shadow-[0_0_15px_rgba(251,191,36,0.3)]');
        btn.classList.add('border-transparent', 'text-gray-400');
    });

    // Bật đèn màu vàng cho cái nút vừa được người dùng bấm
    const activeButton = document.getElementById('btn-3d-' + carModelKey);
    if (activeButton) {
        activeButton.classList.remove('border-transparent', 'text-gray-400');
        activeButton.classList.add('border-amber-400', 'text-white', 'shadow-[0_0_15px_rgba(251,191,36,0.3)]');
    }
}

// 6. Section 8: Booking Form Handler
function handleBooking(e) {
    e.preventDefault();
    const successBox = document.getElementById('booking-success');
    if (successBox) {
        successBox.classList.remove('hidden');
    }
}
async function submitTestDrive() {

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        model: document.getElementById("carModel").value,
        date: document.getElementById("date").value
    };

    await fetch("/save-customer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

// 7. Section 9: Showroom Switcher Logic
const showrooms = {
  hcm: {
    name: "BMW Center TP.HCM",
    address: "80 Nguyễn Văn Linh, Q7",
    phone: "1900 6868",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62715.82965215!2d106.6813683873875!3d10.754560121739656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2a4cc6c589%3A0x2c1e75e03385fe4a!2zQk1XIFBIw5ogTeG7uCBIxq9ORw!5e0!3m2!1svi!2s!4v1787236033962!5m2!1svi!2s"
  },

  hn: {
    name: "BMW Center Hà Nội",
    address: "132 Lê Duẩn",
    phone: "1900 6869",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7627396.453118262!2d96.61303037499998!3d21.02009150000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab007c33685b%3A0xedc24f453ffbeeca!2zQk1XIEzDqiBEdeG6qW4gLSBUSEFDTyBBVVRPIEJNVyBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1787236133845!5m2!1svi!2s"
  },

  dn: {
    name: "BMW Center Đà Nẵng",
    address: "356 Điện Biên Phủ",
    phone: "1900 6870",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.986332129001!2d108.18924467379652!3d16.066199039521674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c1b9f0b2cd%3A0x8020da26ddde5dac!2zQk1XIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1787236211692!5m2!1svi!2s"
  },

  ct: {
    name: "BMW Center Cần Thơ",
    address: "KDC Hưng Phú",
    phone: "1900 6871",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.011231901857!2d105.78029647368534!3d10.015930372763165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a063cfaf6f1d4b%3A0x6ba32096d7ca20bc!2zQk1XIC0gTUlOSSBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1787236265936!5m2!1svi!2s"
  }
}

function selectCity(cityKey) {
    document.querySelectorAll('.city-btn').forEach(btn => {
        btn.classList.remove('border-amber-400', 'text-white');
        btn.classList.add('border-transparent', 'text-gray-400');
    });
    const activeCityBtn = document.getElementById(`city-${cityKey}`);
    if (activeCityBtn) activeCityBtn.classList.remove('border-transparent', 'text-gray-400');
    if (activeCityBtn) activeCityBtn.classList.add('border-amber-400', 'text-white');

    const s = showrooms[cityKey];
    if (!s) return;
    
    document.getElementById('showroom-name').innerText = s.name;
    document.getElementById('showroom-address').innerText = s.address;
    document.getElementById('showroom-phone').innerText = `Hotline VIP: ${s.phone}`;
    document.getElementById('showroom-map').src = s.map;
}

// 8. SIDE NAVBAR BÊN TRÁI & MOBILE MENU (NÚT HAMBURGER)

const sideNavbar = document.getElementById('side-navbar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const heroSection = document.getElementById('hero');

/* --- 8.1 Tự động hiện/ẩn side navbar khi lướt qua khỏi phần header/hero --- */
let sideNavTick = false;

function updateSideNavbarVisibility() {
    if (!sideNavbar || !heroSection) return;
    const passedHero = window.scrollY > heroSection.offsetHeight * 0.75;
    sideNavbar.classList.toggle('visible', passedHero);
}

window.addEventListener('scroll', () => {
    if (sideNavTick) return;
    sideNavTick = true;
    requestAnimationFrame(() => {
        updateSideNavbarVisibility();
        sideNavTick = false;
    });
}, { passive: true });

updateSideNavbarVisibility();

/* --- 8.2 Đánh dấu mục đang xem (active) trên cả side navbar và mobile menu --- */
const watchSections = ['hero', 'lineup', 'story', 'viewer360', 'compare','configurator', 'book-test-drive', 'showroom'];

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;

        document.querySelectorAll('#side-navbar .side-nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.target === id);
        });

        document.querySelectorAll('#mobile-menu .mobile-menu-link').forEach(link => {
            link.classList.toggle('current', link.getAttribute('href') === '#' + id);
        });
    });
}, { rootMargin: '-40% 0px -55% 0px' });

watchSections.forEach(id => {
    const sectionEl = document.getElementById(id);
    if (sectionEl) sectionObserver.observe(sectionEl);
});

/* --- 8.3 Mở / đóng mobile menu --- */
function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.body.classList.add('menu-open');
    if (hamburgerBtn) {
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        hamburgerBtn.setAttribute('aria-label', 'Đóng menu điều hướng');
    }

    // Chuyển focus vào link đầu tiên để điều hướng bằng bàn phím
    const firstLink = mobileMenu.querySelector('.mobile-menu-link');
    if (firstLink) firstLink.focus();
}

function closeMobileMenu({ restoreFocus = true } = {}) {
    if (!mobileMenu || !mobileMenu.classList.contains('open')) return;

    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');

    if (hamburgerBtn) {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', 'Mở menu điều hướng');
        // Trả focus về lại nút hamburger sau khi thoát menu
        if (restoreFocus) hamburgerBtn.focus();
    }
}

function toggleMobileMenu(open) {
    const isOpen = mobileMenu && mobileMenu.classList.contains('open');
    // Không truyền đối số -> đảo trạng thái hiện tại
    // (bấm nút hamburger lần nữa để thu hồi menu)
    const shouldOpen = typeof open === 'boolean' ? open : !isOpen;
    if (shouldOpen) openMobileMenu();
    else closeMobileMenu();
}

// Click vào một link trong mobile menu -> tự đóng menu
if (mobileMenu) {
    mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', () => closeMobileMenu());
    });
}

// Nhấn phím ESC để thoát menu -> focus quay lại nút hamburger
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});
