/**
 * Sweet Crumbs Bakery - Core JavaScript
 * Features:
 * - Product Catalog Data
 * - Shopping Cart Engine (localStorage)
 * - Cart Drawer & Dedicated Cart Page Sync
 * - Quick View Modal
 * - Custom Cake Modal & Request Validation
 * - Live Category Filtering & Sorting
 * - Testimonials Carousel
 * - Checkout Processing & Demo Order Generator
 * - Toast Notification System
 * - Mobile Navigation & Smooth Scrolling
 */

'use strict';

/* ==========================================================================
   1. PRODUCTS CATALOG DATA (PKR CURRENCY)
   ========================================================================== */
const BAKERY_PRODUCTS = [
  {
    id: 'scb-1',
    name: 'Belgian Chocolate Fudge Cake',
    category: 'birthday-cakes',
    categoryName: 'Birthday Cakes',
    price: 2850,
    rating: 4.9,
    reviews: 142,
    badge: 'Bestseller',
    badgeType: 'gold',
    image: 'images/prod-choc-fudge.jpg',
    shortDesc: 'Rich multi-layer sponge smothered with 70% dark Belgian ganache and chocolate curls.',
    description: 'Our most celebrated masterpiece. Three tiers of moist Belgian dark chocolate fudge sponge layered with rich cocoa cream and enrobed in a mirror chocolate ganache. Hand-garnished with artisanal chocolate shards and gold dust.',
    servings: '2 lbs (Serves 8-10)',
    dietary: ['100% Halal', 'Pure Butter', 'Vegetarian']
  },
  {
    id: 'scb-2',
    name: 'Classic Red Velvet Dream Cake',
    category: 'birthday-cakes',
    categoryName: 'Birthday Cakes',
    price: 3200,
    rating: 4.8,
    reviews: 98,
    badge: "Chef's Choice",
    badgeType: 'primary',
    image: 'images/prod-red-velvet.jpg',
    shortDesc: 'Velvety crimson sponge paired with signature Philadelphia cream cheese frosting.',
    description: 'Authentic Southern-style red velvet crumb featuring subtle cocoa notes, balanced with generous layers of tangy Philadelphia cream cheese frosting. Adorned with delicate cake crumbles and fresh berries.',
    servings: '2 lbs (Serves 8-10)',
    dietary: ['100% Halal', 'Vegetarian']
  },
  {
    id: 'scb-3',
    name: 'Royal Heritage Wedding Cake',
    category: 'wedding-cakes',
    categoryName: 'Wedding Cakes',
    price: 14500,
    rating: 5.0,
    reviews: 54,
    badge: 'Luxury',
    badgeType: 'gold',
    image: 'images/prod-wedding-cake.jpg',
    shortDesc: 'Three-tier handcrafted wedding centerpiece with Madagascar vanilla & sugar flora.',
    description: 'An architectural work of pastry art. Three majestic tiers featuring Madagascar bourbon vanilla sponge, champagne buttercream, and passionfruit curd. Decorated with edible 24k gold leaf and handmade sugar flowers.',
    servings: '3-Tier (Serves 40-50)',
    dietary: ['100% Halal', 'Custom Flavour Available']
  },
  {
    id: 'scb-4',
    name: 'Artisan Strawberry Cupcakes (Pack of 4)',
    category: 'cupcakes',
    categoryName: 'Cupcakes',
    price: 1250,
    rating: 4.8,
    reviews: 110,
    badge: 'Popular',
    badgeType: 'primary',
    image: 'images/prod-strawberry-cupcake.jpg',
    shortDesc: 'Vanilla bean sponge filled with strawberry compote and whipped pink buttercream.',
    description: 'Airy vanilla sponge cores infused with slow-simmered organic strawberry compote, crowned with tall rosettes of strawberry buttercream and finished with edible pearl sprinkles.',
    servings: 'Box of 4 Pieces',
    dietary: ['100% Halal', 'Fresh Fruit Filling']
  },
  {
    id: 'scb-5',
    name: 'Belgian Chocolate Chip Cookies (6 Pcs)',
    category: 'cookies',
    categoryName: 'Cookies',
    price: 950,
    rating: 4.9,
    reviews: 185,
    badge: 'Fresh Batch',
    badgeType: 'gold',
    image: 'images/prod-choc-chip-cookies.jpg',
    shortDesc: 'Golden crispy edges, molten chocolate center, finished with sea salt crystals.',
    description: 'Baked throughout the day. Golden-crisp perimeter with a delightfully chewy center, loaded with molten 64% Belgian dark chocolate chunks and finished with flaked sea salt crystals.',
    servings: 'Pack of 6 Cookies',
    dietary: ['100% Halal', 'Normandy Butter']
  },
  {
    id: 'scb-6',
    name: 'Classic Honey Glazed Donuts (Box of 4)',
    category: 'donuts',
    categoryName: 'Donuts',
    price: 980,
    rating: 4.7,
    reviews: 122,
    badge: 'Bestseller',
    badgeType: 'primary',
    image: 'images/prod-glazed-donuts.jpg',
    shortDesc: '24-hour slow fermented brioche dough with warm wild blossom honey glaze.',
    description: 'Ultra-light, fluffy brioche ring donuts proofed for 24 hours. Dipped warm into pure wildflower honey glaze that crisps upon cooling. Melt-in-your-mouth perfection.',
    servings: 'Box of 4 Donuts',
    dietary: ['100% Halal', 'Zero Preservatives']
  },
  {
    id: 'scb-7',
    name: 'Golden French Butter Croissants (2 Pcs)',
    category: 'croissants',
    categoryName: 'Croissants',
    price: 750,
    rating: 4.9,
    reviews: 240,
    badge: 'Bakery Classic',
    badgeType: 'gold',
    image: 'images/prod-butter-croissant.jpg',
    shortDesc: '27 micro-flaky buttery layers made with 100% Normandy butter.',
    description: 'Traditional French viennoiserie technique. Crafted with imported Normandy butter and three days of precise lamination. Incredibly flaky exterior giving way to a soft, honeycomb interior.',
    servings: 'Pair of 2 Large Croissants',
    dietary: ['100% Halal', '100% Pure Butter']
  },
  {
    id: 'scb-8',
    name: 'Wild Blueberry Streusel Muffins (3 Pcs)',
    category: 'pastries',
    categoryName: 'Pastries',
    price: 1100,
    rating: 4.8,
    reviews: 84,
    badge: 'Morning Special',
    badgeType: 'primary',
    image: 'images/prod-blueberry-muffin.jpg',
    shortDesc: 'Loaded with juicy wild blueberries and crowned with cinnamon sugar streusel.',
    description: 'Plump wild blueberries folded into a rich sour cream batter, crowned with a crunchy cinnamon butter streusel crumble. Wonderfully moist and fragrant.',
    servings: 'Pack of 3 Jumbo Muffins',
    dietary: ['100% Halal', 'Real Fruit']
  },
  {
    id: 'scb-9',
    name: 'Fresh Strawberry Cream Cake',
    category: 'birthday-cakes',
    categoryName: 'Birthday Cakes',
    price: 2950,
    rating: 4.9,
    reviews: 95,
    badge: 'Seasonal',
    badgeType: 'gold',
    image: 'images/prod-fresh-cream-cake.jpg',
    shortDesc: 'Japanese chiffon sponge layered with light chantilly cream and sliced berries.',
    description: 'A cloud-like chiffon cake layered with unsweetened chantilly whipped cream and slices of fresh strawberries. Light, airy, and gently sweetened.',
    servings: '2 lbs (Serves 8-10)',
    dietary: ['100% Halal', 'Light & Low Sugar']
  },
  {
    id: 'scb-10',
    name: 'Artisan Country Sourdough Loaf',
    category: 'bread',
    categoryName: 'Fresh Bread',
    price: 650,
    rating: 4.9,
    reviews: 130,
    badge: 'Naturally Fermented',
    badgeType: 'primary',
    image: 'images/prod-sourdough.jpg',
    shortDesc: 'Slow-fermented for 36 hours with our 6-year-old sourdough culture.',
    description: 'Baked fresh in stone hearth ovens every morning. Crusty blistered dark crust with an open, custard-like crumb and subtle lactic tang. Made simply with flour, water, sea salt, and wild levain.',
    servings: '750g Artisan Loaf',
    dietary: ['100% Halal', 'Vegan', 'No Sugar Added']
  },
  {
    id: 'scb-11',
    name: 'Gourmet Fresh Fruit Tartlet Duo',
    category: 'pastries',
    categoryName: 'Pastries',
    price: 1050,
    rating: 4.8,
    reviews: 67,
    badge: 'Chef Curated',
    badgeType: 'primary',
    image: 'images/prod-fruit-tart.jpg',
    shortDesc: 'Buttery sablé pastry shell filled with vanilla bean custard and glazed berries.',
    description: 'Crisp French butter sablé tart shells lined with dark chocolate, filled with silk-smooth Tahitian vanilla bean pastry cream, and topped with glazed fresh berries.',
    servings: '2 Tartlets',
    dietary: ['100% Halal', 'Vegetarian']
  },
  {
    id: 'scb-12',
    name: 'Parisian Macaron Gift Box (8 Pcs)',
    category: 'cookies',
    categoryName: 'Cookies',
    price: 1850,
    rating: 5.0,
    reviews: 156,
    badge: 'Luxury Gift',
    badgeType: 'gold',
    image: 'images/prod-macarons.jpg',
    shortDesc: 'Delicate almond meringue shells filled with pistachio, caramel, and chocolate.',
    description: 'Classic French macarons featuring crisp delicate shells with chewy interiors. Assorted box contains Pistachio, Salted Butter Caramel, Dark Chocolate Ganache, and Raspberry Rose.',
    servings: 'Box of 8 Assorted Macarons',
    dietary: ['100% Halal', 'Naturally Gluten-Free']
  }
];

/* Sample Testimonials */
const TESTIMONIALS = [
  {
    quote: "Sweet Crumbs designed our 3-tier wedding cake in Karachi. Not only was it visually breathtaking, but the Belgian chocolate and raspberry layers were moist and heavenly! Every guest asked where it came from.",
    author: "Ayesha & Bilal Khan",
    location: "DHA Phase 6, Karachi",
    stars: 5
  },
  {
    quote: "Their butter croissants rival the best patisseries I’ve visited in Paris. Crispy, golden, shattering flaky layers with authentic Normandy butter aroma. It is my daily breakfast ritual!",
    author: "Dr. Farhan Siddiqui",
    location: "Clifton Block 4, Karachi",
    stars: 5
  },
  {
    quote: "Ordered the Red Velvet Dream Cake for my daughter's 18th birthday. The cream cheese frosting was pure luxury—not overly sweet, just perfect balance. Delivery was punctual in temperature-safe packaging.",
    author: "Samina Tariq",
    location: "Gulshan-e-Iqbal, Karachi",
    stars: 5
  },
  {
    quote: "The custom cake tool made ordering effortless! We requested a themed anniversary cake with specific floral patterns and they brought our vision to life beyond expectations. Highly recommended!",
    author: "Zainab & Omar",
    location: "F-7 Markaz, Islamabad",
    stars: 5
  }
];

/* ==========================================================================
   2. SHOPPING CART ENGINE (LOCALSTORAGE)
   ========================================================================== */
const CART_STORAGE_KEY = 'sweet_crumbs_cart_v1';
const PROMO_STORAGE_KEY = 'sweet_crumbs_promo_v1';
const FREE_SHIPPING_THRESHOLD = 2500;
const STANDARD_DELIVERY_FEE = 250;

class CartManager {
  static getCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading cart from localStorage', e);
      return [];
    }
  }

  static saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      this.updateUI();
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }

  static addItem(productId, quantity = 1) {
    const qty = parseInt(quantity, 10) || 1;
    const product = BAKERY_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        categoryName: product.categoryName,
        quantity: qty
      });
    }

    this.saveCart(cart);
    this.animateCartBadge();
    showToast('Item Added to Cart!', `${product.name} (x${qty}) added.`, '🍰');
  }

  static updateQuantity(productId, delta) {
    let cart = this.getCart();
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
      showToast('Item Removed', `${item.name} removed from your cart.`, '🗑️');
    }

    this.saveCart(cart);
  }

  static removeItem(productId) {
    let cart = this.getCart();
    const item = cart.find(i => i.id === productId);
    cart = cart.filter(i => i.id !== productId);
    this.saveCart(cart);
    if (item) {
      showToast('Item Removed', `${item.name} removed from your cart.`, '🗑️');
    }
  }

  static clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    this.updateUI();
  }

  static getPromoCode() {
    return localStorage.getItem(PROMO_STORAGE_KEY) || null;
  }

  static applyPromoCode(code) {
    const cleanCode = code ? code.trim().toUpperCase() : '';
    if (cleanCode === 'SWEET10') {
      localStorage.setItem(PROMO_STORAGE_KEY, 'SWEET10');
      this.updateUI();
      showToast('Promo Code Applied!', '10% discount applied to your order subtotal!', '🎉');
      return { success: true, discountRate: 0.1 };
    } else {
      showToast('Invalid Promo Code', 'Please enter a valid coupon like SWEET10', '⚠️');
      return { success: false };
    }
  }

  static removePromoCode() {
    localStorage.removeItem(PROMO_STORAGE_KEY);
    this.updateUI();
  }

  static calculateTotals() {
    const cart = this.getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    const promo = this.getPromoCode();
    let discount = 0;
    if (promo === 'SWEET10' && subtotal > 0) {
      discount = Math.round(subtotal * 0.10);
    }

    const deliveryFee = (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) ? 0 : STANDARD_DELIVERY_FEE;
    const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

    return {
      count,
      subtotal,
      discount,
      deliveryFee,
      grandTotal,
      isFreeDelivery: deliveryFee === 0 && subtotal > 0,
      freeDeliveryGap: Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
    };
  }

  static animateCartBadge() {
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(b => {
      b.classList.add('bump');
      setTimeout(() => b.classList.remove('bump'), 400);
    });
  }

  static updateUI() {
    const totals = this.calculateTotals();
    const cart = this.getCart();

    // 1. Update all cart count badges
    document.querySelectorAll('.cart-count').forEach(badge => {
      badge.textContent = totals.count;
      badge.style.display = totals.count > 0 ? 'flex' : 'none';
    });

    // 2. Render Drawer
    this.renderDrawerUI(cart, totals);

    // 3. Render Cart Page if exists
    if (document.getElementById('cart-page-container')) {
      this.renderCartPageUI(cart, totals);
    }

    // 4. Render Checkout Page if exists
    if (document.getElementById('checkout-order-summary')) {
      this.renderCheckoutSummaryUI(cart, totals);
    }
  }

  static renderDrawerUI(cart, totals) {
    const drawerItemsContainer = document.getElementById('drawer-items-list');
    const drawerSubtotal = document.getElementById('drawer-subtotal');
    const drawerDelivery = document.getElementById('drawer-delivery');
    const drawerTotal = document.getElementById('drawer-total');
    const drawerShippingMeter = document.getElementById('drawer-shipping-meter');
    const drawerFooter = document.getElementById('drawer-footer');

    if (!drawerItemsContainer) return;

    if (cart.length === 0) {
      drawerItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🥐</div>
          <h3 class="cart-empty-title">Your Cart is Empty</h3>
          <p class="cart-empty-desc">Fresh cakes, warm croissants, and sweet treats are waiting for you.</p>
          <a href="menu.html" class="btn btn-primary btn-sm">Explore Menu</a>
        </div>
      `;
      if (drawerShippingMeter) drawerShippingMeter.style.display = 'none';
      if (drawerFooter) drawerFooter.style.display = 'none';
      return;
    }

    if (drawerShippingMeter) {
      drawerShippingMeter.style.display = 'block';
      const pct = Math.min(100, Math.round((totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      const msg = totals.isFreeDelivery
        ? `🎉 <strong>Congratulations!</strong> You unlocked FREE Delivery!`
        : `Add <strong>PKR ${totals.freeDeliveryGap.toLocaleString()}</strong> more for <strong>FREE Delivery</strong>!`;

      drawerShippingMeter.innerHTML = `
        <div class="shipping-meter-text">${msg}</div>
        <div class="shipping-progress-bar">
          <div class="shipping-progress-fill" style="width: ${pct}%;"></div>
        </div>
      `;
    }

    if (drawerFooter) drawerFooter.style.display = 'block';

    let html = '';
    cart.forEach(item => {
      html += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='images/prod-choc-fudge.jpg'">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <div class="cart-item-price">PKR ${(item.price * item.quantity).toLocaleString()} <span style="font-size:0.75rem; color:var(--text-light); font-weight:400;">(PKR ${item.price.toLocaleString()} each)</span></div>
            <div class="cart-qty-row">
              <div class="qty-stepper">
                <button type="button" class="qty-btn" onclick="CartManager.updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-num">${item.quantity}</span>
                <button type="button" class="qty-btn" onclick="CartManager.updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <button type="button" class="cart-item-remove" onclick="CartManager.removeItem('${item.id}')" aria-label="Remove item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    });
    drawerItemsContainer.innerHTML = html;

    if (drawerSubtotal) drawerSubtotal.textContent = `PKR ${totals.subtotal.toLocaleString()}`;
    if (drawerDelivery) drawerDelivery.textContent = totals.deliveryFee === 0 ? 'FREE' : `PKR ${totals.deliveryFee.toLocaleString()}`;
    if (drawerTotal) drawerTotal.textContent = `PKR ${totals.grandTotal.toLocaleString()}`;
  }

  static renderCartPageUI(cart, totals) {
    const container = document.getElementById('cart-page-container');
    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state" style="padding: 90px 20px;">
          <div class="cart-empty-icon" style="width:100px; height:100px; font-size:3rem;">🎂</div>
          <h2 class="cart-empty-title" style="font-size:2rem;">Your Basket is Currently Empty</h2>
          <p class="cart-empty-desc" style="max-width:380px; margin-bottom:30px;">
            It looks like you haven't added any sweet treats yet. Treat yourself or your loved ones today!
          </p>
          <a href="menu.html" class="btn btn-primary">Browse Bakery Menu</a>
        </div>
      `;
      return;
    }

    const promo = this.getPromoCode();

    let itemsHtml = '';
    cart.forEach(item => {
      itemsHtml += `
        <tr style="border-bottom: 1px solid var(--border-light);">
          <td style="padding: 18px 12px; display: flex; align-items: center; gap: 16px;">
            <img src="${item.image}" alt="${item.name}" style="width: 72px; height: 72px; border-radius: 10px; object-fit: cover;">
            <div>
              <h4 style="font-family: var(--font-heading); font-size: 1.05rem; color: var(--primary);">${item.name}</h4>
              <p style="font-size: 0.8rem; color: var(--text-light);">${item.categoryName}</p>
            </div>
          </td>
          <td style="padding: 18px 12px; font-weight: 600; color: var(--primary);">
            PKR ${item.price.toLocaleString()}
          </td>
          <td style="padding: 18px 12px;">
            <div class="qty-stepper">
              <button type="button" class="qty-btn" onclick="CartManager.updateQuantity('${item.id}', -1)">−</button>
              <span class="qty-num">${item.quantity}</span>
              <button type="button" class="qty-btn" onclick="CartManager.updateQuantity('${item.id}', 1)">+</button>
            </div>
          </td>
          <td style="padding: 18px 12px; font-weight: 700; color: var(--accent-dark);">
            PKR ${(item.price * item.quantity).toLocaleString()}
          </td>
          <td style="padding: 18px 12px; text-align: center;">
            <button type="button" onclick="CartManager.removeItem('${item.id}')" style="color: #D94B4B; cursor: pointer; padding: 6px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 48px; align-items: start;">
        <div style="background: #FFFFFF; border-radius: var(--radius-lg); border: 1px solid var(--border-light); padding: 32px; box-shadow: var(--shadow-sm); overflow-x: auto;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 24px;">
            <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--primary);">Cart Items (${totals.count})</h3>
            <button type="button" onclick="CartManager.clearCart()" style="font-size: 0.85rem; color: #D94B4B; font-weight: 600; text-decoration: underline;">Clear Entire Cart</button>
          </div>

          <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 500px;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-light); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light);">
                <th style="padding-bottom: 12px;">Product</th>
                <th style="padding-bottom: 12px;">Price</th>
                <th style="padding-bottom: 12px;">Qty</th>
                <th style="padding-bottom: 12px;">Total</th>
                <th style="padding-bottom: 12px; text-align: center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; flex-wrap: wrap; gap: 16px;">
            <a href="menu.html" class="btn btn-outline btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Continue Shopping
            </a>
          </div>
        </div>

        <div class="order-summary-box">
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--primary); margin-bottom: 20px;">Order Summary</h3>
          
          <div class="cart-totals-row">
            <span>Subtotal:</span>
            <strong>PKR ${totals.subtotal.toLocaleString()}</strong>
          </div>

          ${totals.discount > 0 ? `
            <div class="cart-totals-row" style="color: #2E7D32;">
              <span>Promo (SWEET10):</span>
              <strong>- PKR ${totals.discount.toLocaleString()}</strong>
            </div>
          ` : ''}

          <div class="cart-totals-row">
            <span>Estimated Delivery:</span>
            <strong>${totals.deliveryFee === 0 ? '<span style="color:#2E7D32;">FREE</span>' : `PKR ${totals.deliveryFee.toLocaleString()}`}</strong>
          </div>

          ${totals.freeDeliveryGap > 0 ? `
            <div style="background: var(--blush-light); border-radius: var(--radius-sm); padding: 10px 14px; font-size: 0.82rem; color: var(--primary); margin: 16px 0;">
              Add PKR ${totals.freeDeliveryGap.toLocaleString()} more to qualify for <strong>FREE Delivery</strong> across town!
            </div>
          ` : `
            <div style="background: rgba(46, 125, 50, 0.1); border-radius: var(--radius-sm); padding: 10px 14px; font-size: 0.82rem; color: #2E7D32; margin: 16px 0; font-weight:600;">
              ✨ You qualify for Free Express Delivery!
            </div>
          `}

          <!-- Promo Input -->
          <div style="margin: 20px 0;">
            <label style="font-size: 0.82rem; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 6px;">Have a Promo Code?</label>
            <div style="display: flex; gap: 8px;">
              <input type="text" id="cart-promo-input" placeholder="e.g. SWEET10" value="${promo || ''}" style="flex:1; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-sm); font-size: 0.9rem; text-transform: uppercase;">
              ${promo ? `
                <button type="button" onclick="CartManager.removePromoCode()" class="btn btn-outline btn-sm">Remove</button>
              ` : `
                <button type="button" onclick="applyPromoFromCart()" class="btn btn-primary btn-sm">Apply</button>
              `}
            </div>
            <p style="font-size: 0.75rem; color: var(--text-light); margin-top: 4px;">Try code <strong>SWEET10</strong> for 10% off your entire order!</p>
          </div>

          <div class="cart-totals-row grand-total">
            <span>Total Payable:</span>
            <span style="color: var(--primary);">PKR ${totals.grandTotal.toLocaleString()}</span>
          </div>

          <a href="checkout.html" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Proceed to Checkout</a>
        </div>
      </div>
    `;
  }

  static renderCheckoutSummaryUI(cart, totals) {
    const summaryBox = document.getElementById('checkout-order-summary');
    if (!summaryBox) return;

    if (cart.length === 0) {
      summaryBox.innerHTML = `
        <div style="text-align: center; padding: 30px 10px;">
          <p style="color: var(--text-muted); margin-bottom: 16px;">Your cart is empty.</p>
          <a href="menu.html" class="btn btn-primary btn-sm">Browse Products</a>
        </div>
      `;
      return;
    }

    let itemsHtml = '';
    cart.forEach(item => {
      itemsHtml += `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; font-size: 0.88rem;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${item.image}" alt="${item.name}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;">
            <div>
              <strong style="color: var(--primary); display: block;">${item.name}</strong>
              <span style="color: var(--text-light); font-size: 0.8rem;">Qty: ${item.quantity}</span>
            </div>
          </div>
          <span style="font-weight: 600; color: var(--primary);">PKR ${(item.price * item.quantity).toLocaleString()}</span>
        </div>
      `;
    });

    summaryBox.innerHTML = `
      <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--primary); margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px solid var(--border-light);">
        Order Review (${totals.count} Items)
      </h3>

      <div style="max-height: 240px; overflow-y: auto; margin-bottom: 18px; padding-right: 6px;">
        ${itemsHtml}
      </div>

      <div style="border-top: 1px solid var(--border-light); padding-top: 14px;">
        <div class="cart-totals-row">
          <span>Subtotal</span>
          <strong>PKR ${totals.subtotal.toLocaleString()}</strong>
        </div>

        ${totals.discount > 0 ? `
          <div class="cart-totals-row" style="color: #2E7D32;">
            <span>Discount (10%)</span>
            <strong>- PKR ${totals.discount.toLocaleString()}</strong>
          </div>
        ` : ''}

        <div class="cart-totals-row">
          <span>Standard Delivery</span>
          <strong>${totals.deliveryFee === 0 ? '<span style="color:#2E7D32;">FREE</span>' : `PKR ${totals.deliveryFee.toLocaleString()}`}</strong>
        </div>

        <div class="cart-totals-row grand-total" style="margin-bottom: 0;">
          <span>Grand Total:</span>
          <span>PKR ${totals.grandTotal.toLocaleString()}</span>
        </div>
      </div>
    `;
  }
}

function applyPromoFromCart() {
  const input = document.getElementById('cart-promo-input');
  if (input) {
    CartManager.applyPromoCode(input.value);
  }
}

/* ==========================================================================
   3. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(title, message, icon = '✨') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.35s ease';
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

/* ==========================================================================
   4. QUICK VIEW MODAL
   ========================================================================== */
function openQuickView(productId) {
  const product = BAKERY_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  const content = modal.querySelector('.modal-card-content');
  if (!content) return;

  content.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-media">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='images/prod-choc-fudge.jpg'">
        <span class="product-badge ${product.badgeType}">${product.badge}</span>
      </div>
      <div class="quick-view-details">
        <span class="product-category">${product.categoryName}</span>
        <h2 class="product-title">${product.name}</h2>
        
        <div class="product-rating" style="margin-bottom: 14px;">
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <strong>${product.rating}</strong>
          <span class="rating-count">(${product.reviews} verified reviews)</span>
        </div>

        <div class="product-price"><span>PKR</span> ${product.price.toLocaleString()}</div>
        <p class="product-desc" style="-webkit-line-clamp: unset; margin-bottom: 20px;">${product.description}</p>
        
        <div style="margin-bottom: 20px; font-size: 0.88rem; color: var(--primary);">
          <strong>Portion / Size:</strong> ${product.servings}
        </div>

        <div class="quick-view-meta-tags">
          ${product.dietary.map(d => `<span class="meta-pill">✓ ${d}</span>`).join('')}
        </div>

        <div style="display: flex; align-items: center; gap: 16px; margin-top: auto;">
          <div class="qty-stepper" style="height: 46px;">
            <button type="button" class="qty-btn" style="width: 36px; height: 100%;" onclick="adjustQuickViewQty(-1)">−</button>
            <span class="qty-num" id="quick-view-qty-val" style="width: 40px; font-size: 1rem;">1</span>
            <button type="button" class="qty-btn" style="width: 36px; height: 100%;" onclick="adjustQuickViewQty(1)">+</button>
          </div>
          <button type="button" class="btn btn-primary" style="flex: 1;" onclick="addQuickViewToCart('${product.id}')">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function adjustQuickViewQty(delta) {
  const elem = document.getElementById('quick-view-qty-val');
  if (!elem) return;
  let val = parseInt(elem.textContent, 10) || 1;
  val = Math.max(1, val + delta);
  elem.textContent = val;
}

function addQuickViewToCart(productId) {
  const elem = document.getElementById('quick-view-qty-val');
  const qty = elem ? parseInt(elem.textContent, 10) || 1 : 1;
  CartManager.addItem(productId, qty);
  closeAllModals();
}

/* ==========================================================================
   5. CUSTOM CAKE MODAL & PRICE CALCULATOR
   ========================================================================== */
function openCustomCakeModal() {
  const modal = document.getElementById('custom-cake-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Set min delivery date to tomorrow
  const dateInput = document.getElementById('custom-cake-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }
}

function handleCustomCakeSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const name = form['customer-name'] ? form['customer-name'].value.trim() : '';
  const phone = form['customer-phone'] ? form['customer-phone'].value.trim() : '';
  const type = form['cake-type'] ? form['cake-type'].value : '';
  const size = form['cake-size'] ? form['cake-size'].value : '';
  const flavor = form['cake-flavor'] ? form['cake-flavor'].value : '';
  const date = form['cake-date'] ? form['cake-date'].value : '';
  const description = form['cake-desc'] ? form['cake-desc'].value.trim() : '';

  if (!name || !phone || !type || !size || !flavor || !date || !description) {
    showToast('Incomplete Form', 'Please fill in all required fields.', '⚠️');
    return;
  }

  // Pakistani phone number format validation (flexible 11 digits)
  const phoneRegex = /^(\+92|0)?3[0-9]{2}[0-9]{7}$/;
  const cleanPhone = phone.replace(/[\s-]/g, '');
  if (!phoneRegex.test(cleanPhone)) {
    showToast('Invalid Phone Number', 'Please enter a valid Pakistani mobile number (e.g., 0300-1234567).', '⚠️');
    return;
  }

  const sampleRequestId = `REQ-${Math.floor(100000 + Math.random() * 900000)}`;

  closeAllModals();
  form.reset();

  // Show detailed confirmation modal or toast
  const confirmModal = document.getElementById('custom-cake-confirm-modal');
  if (confirmModal) {
    confirmModal.querySelector('#confirm-req-id').textContent = sampleRequestId;
    confirmModal.querySelector('#confirm-customer-name').textContent = name;
    confirmModal.querySelector('#confirm-cake-summary').textContent = `${size} ${flavor} ${type} for ${date}`;
    confirmModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    showToast(
      'Custom Cake Request Received!',
      `Request #${sampleRequestId} recorded for ${name}. In a real store, our pastry artist calls you within 30 minutes!`,
      '🎂'
    );
  }
}

/* ==========================================================================
   6. CHECKOUT FORM PROCESSING
   ========================================================================== */
function handleCheckoutSubmit(event) {
  event.preventDefault();
  const cart = CartManager.getCart();
  if (cart.length === 0) {
    showToast('Cart is Empty', 'Please add items to your cart before proceeding to checkout.', '⚠️');
    return;
  }

  const form = event.target;
  const fullName = form['checkout-name'].value.trim();
  const phone = form['checkout-phone'].value.trim();
  const email = form['checkout-email'].value.trim();
  const address = form['checkout-address'].value.trim();
  const city = form['checkout-city'].value;
  const paymentMethod = form['checkout-payment'] ? form['checkout-payment'].value : 'Cash on Delivery';

  if (!fullName || !phone || !address || !city) {
    showToast('Missing Details', 'Please complete all required billing and delivery details.', '⚠️');
    return;
  }

  const totals = CartManager.calculateTotals();
  const sampleOrderId = `SCB-${Math.floor(10000 + Math.random() * 90000)}`;

  // Populate Order Confirmation Modal
  const modal = document.getElementById('order-confirmation-modal');
  if (modal) {
    document.getElementById('conf-order-id').textContent = `#${sampleOrderId}`;
    document.getElementById('conf-customer-name').textContent = fullName;
    document.getElementById('conf-address').textContent = `${address}, ${city}`;
    document.getElementById('conf-payment-method').textContent = paymentMethod;
    document.getElementById('conf-total-amount').textContent = `PKR ${totals.grandTotal.toLocaleString()}`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Clear cart after placing order
  CartManager.clearCart();
}

/* ==========================================================================
   7. PRODUCT GRID RENDERING, FILTERING & SORTING
   ========================================================================== */
function renderProductCards(products, targetContainerId) {
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.2rem; color: var(--text-muted); font-family: var(--font-heading);">No bakery items match your selection.</p>
        <button type="button" class="btn btn-outline btn-sm" style="margin-top: 14px;" onclick="resetProductFilters()">View All Items</button>
      </div>
    `;
    return;
  }

  let html = '';
  products.forEach(p => {
    html += `
      <article class="product-card" data-category="${p.category}" data-id="${p.id}">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.src='images/prod-choc-fudge.jpg'">
          <span class="product-badge ${p.badgeType}">${p.badge}</span>
          <button type="button" class="quick-view-btn" onclick="openQuickView('${p.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Quick View
          </button>
        </div>
        <div class="product-body">
          <div class="product-meta">
            <span class="product-category">${p.categoryName}</span>
            <div class="product-rating">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>${p.rating}</span>
              <span class="rating-count">(${p.reviews})</span>
            </div>
          </div>
          <h3 class="product-title">${p.name}</h3>
          <p class="product-desc">${p.shortDesc}</p>
          <div class="product-footer">
            <div class="product-price">
              <span>PKR</span> ${p.price.toLocaleString()}
            </div>
            <button type="button" class="add-to-cart-btn" onclick="CartManager.addItem('${p.id}', 1)" aria-label="Add ${p.name} to cart">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              Add
            </button>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

let activeCategory = 'all';
let currentSort = 'featured';

function filterProducts(category) {
  activeCategory = category;

  // Update pills active state
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  applyFiltersAndSort();
}

function sortProducts(sortType) {
  currentSort = sortType;
  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  let list = [...BAKERY_PRODUCTS];

  // 1. Category Filter
  if (activeCategory !== 'all') {
    list = list.filter(p => p.category === activeCategory);
  }

  // 2. Sorting
  if (currentSort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  // Render on index grid or menu grid
  if (document.getElementById('bestsellers-grid')) {
    renderProductCards(list, 'bestsellers-grid');
  }
  if (document.getElementById('menu-grid')) {
    renderProductCards(list, 'menu-grid');
  }
}

function resetProductFilters() {
  activeCategory = 'all';
  currentSort = 'featured';
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  const sortSelect = document.getElementById('product-sort');
  if (sortSelect) sortSelect.value = 'featured';
  applyFiltersAndSort();
}

/* ==========================================================================
   8. TESTIMONIALS SLIDER
   ========================================================================== */
let currentTestimonialIndex = 0;
let testimonialAutoTimer = null;

function initTestimonialSlider() {
  const container = document.getElementById('testimonial-slides-wrap');
  const dotsContainer = document.getElementById('slider-dots-wrap');
  if (!container) return;

  let slidesHtml = '';
  let dotsHtml = '';

  TESTIMONIALS.forEach((t, idx) => {
    slidesHtml += `
      <div class="testimonial-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <div class="testimonial-card">
          <div class="testimonial-quote-icon">“</div>
          <div class="testimonial-stars">
            ${Array(t.stars).fill('').map(() => `
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            `).join('')}
          </div>
          <p class="testimonial-text">${t.quote}</p>
          <div class="testimonial-author-wrap">
            <h4 class="testimonial-author">${t.author}</h4>
            <span class="testimonial-city">${t.location}</span>
            <span class="testimonial-sample-tag">Verified Sample Customer Review</span>
          </div>
        </div>
      </div>
    `;

    dotsHtml += `
      <span class="slider-dot ${idx === 0 ? 'active' : ''}" onclick="goToTestimonial(${idx})" aria-label="Go to slide ${idx + 1}"></span>
    `;
  });

  container.innerHTML = slidesHtml;
  if (dotsContainer) dotsContainer.innerHTML = dotsHtml;

  startTestimonialAutoPlay();
}

function showTestimonial(index) {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (slides.length === 0) return;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  currentTestimonialIndex = index;

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

function nextTestimonial() {
  showTestimonial(currentTestimonialIndex + 1);
}

function prevTestimonial() {
  showTestimonial(currentTestimonialIndex - 1);
}

function goToTestimonial(index) {
  showTestimonial(index);
  startTestimonialAutoPlay();
}

function startTestimonialAutoPlay() {
  clearInterval(testimonialAutoTimer);
  testimonialAutoTimer = setInterval(() => {
    nextTestimonial();
  }, 6000);
}

/* ==========================================================================
   9. SEARCH MODAL & INSTANT LOOKUP
   ========================================================================== */
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  const input = document.getElementById('search-query-input');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 150);
    renderSearchResults('');
  }
}

function handleSearchInput(e) {
  const q = e.target.value.toLowerCase().trim();
  renderSearchResults(q);
}

function renderSearchResults(query) {
  const resultsContainer = document.getElementById('search-results-list');
  if (!resultsContainer) return;

  if (!query) {
    resultsContainer.innerHTML = `
      <p style="text-align: center; color: var(--text-light); font-size: 0.9rem; padding: 20px;">
        Type cake, croissant, donut, or flavor to find your treat...
      </p>
    `;
    return;
  }

  const matches = BAKERY_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.categoryName.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <p style="text-align: center; color: var(--text-muted); padding: 24px;">
        No bakery treats found matching "<strong>${query}</strong>".
      </p>
    `;
    return;
  }

  let html = '';
  matches.forEach(p => {
    html += `
      <div class="search-item-link" onclick="openQuickView('${p.id}'); closeAllModals();">
        <img src="${p.image}" alt="${p.name}" class="search-item-thumb">
        <div style="flex: 1;">
          <h4 style="font-family: var(--font-heading); font-size: 1rem; color: var(--primary);">${p.name}</h4>
          <span style="font-size: 0.78rem; color: var(--accent); text-transform: uppercase;">${p.categoryName}</span>
        </div>
        <div style="font-weight: 700; color: var(--primary);">
          PKR ${p.price.toLocaleString()}
        </div>
      </div>
    `;
  });

  resultsContainer.innerHTML = html;
}

/* ==========================================================================
   10. NEWSLETTER & CONTACT FORM VALIDATION
   ========================================================================== */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (!input) return;

  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    showToast('Invalid Email', 'Please enter a valid email address.', '⚠️');
    return;
  }

  input.value = '';
  showToast(
    'Subscribed Successfully!',
    'Welcome to Sweet Crumbs family! Note: Demo site - no real promotional emails sent.',
    '💌'
  );
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form['contact-name'] ? form['contact-name'].value.trim() : '';
  const email = form['contact-email'] ? form['contact-email'].value.trim() : '';
  const subject = form['contact-subject'] ? form['contact-subject'].value.trim() : '';
  const message = form['contact-message'] ? form['contact-message'].value.trim() : '';

  if (!name || !email || !message) {
    showToast('Missing Fields', 'Please fill in your name, email, and message.', '⚠️');
    return;
  }

  form.reset();
  showToast(
    'Message Sent Successfully!',
    `Thank you, ${name}! Your inquiry has been received. Our team will contact you shortly. (Demo submission)`,
    '✉️'
  );
}

function copyPromoCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast('Code Copied!', `Promo code "${code}" copied to clipboard! Paste at checkout.`, '📋');
  }).catch(() => {
    showToast('Promo Code', `Use code "${code}" at checkout for 10% off!`, '🎁');
  });
}

/* ==========================================================================
   11. DRAWER & MODAL TOGGLERS
   ========================================================================== */
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer-overlay');
  if (drawer) {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer-overlay');
  if (drawer) {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  closeCartDrawer();
  document.body.style.overflow = '';
}

function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger-btn');
  if (!nav) return;

  const isOpen = nav.classList.toggle('open');
  if (btn) btn.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger-btn');
  if (nav) nav.classList.remove('open');
  if (btn) btn.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   12. INIT & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial UI update from localStorage
  CartManager.updateUI();

  // 2. Render Products Grids if present
  if (document.getElementById('bestsellers-grid')) {
    renderProductCards(BAKERY_PRODUCTS.slice(0, 8), 'bestsellers-grid');
  }
  if (document.getElementById('menu-grid')) {
    renderProductCards(BAKERY_PRODUCTS, 'menu-grid');
  }

  // 3. Init Testimonials Slider
  if (document.getElementById('testimonial-slides-wrap')) {
    initTestimonialSlider();
  }

  // 4. Sticky Header & Back-to-Top scroll listener
  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      header.classList.toggle('scrolled', scrollY > 40);
    }
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. ESC Key listener to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeMobileNav();
    }
  });

  // 6. Check for URL hash category filtering (e.g., menu.html#birthday-cakes)
  const hash = window.location.hash.replace('#', '');
  if (hash && ['birthday-cakes', 'wedding-cakes', 'cupcakes', 'donuts', 'cookies', 'bread', 'croissants', 'pastries'].includes(hash)) {
    filterProducts(hash);
  }
});
