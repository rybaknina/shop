<template>
  <inner-title/>
  <section class="products">
    <div class="container">
      <h2 class="hidden">Products</h2>
      <div class="products-wrap">
        <section class="filter-box">
          <h3 class="hidden">Product filter</h3>
          <details class="filter">
            <summary class="filter-name">
              <span class="filter-header">FILTER</span>
              <svg class="filter-name--icon" width="15" height="10" viewBox="0 0 15 10"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                  color="currentColor"/>
              </svg>
            </summary>
            <div class="filter-content">
              <details class="filter-title" open>
                <summary class="filter-title-name">CATEGORY</summary>
                <ul class="filter-list">
                  <li class="filter-item"><a href="#" class="filter-link">Accessories</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Bags</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Denim</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Hoodies & Sweatshirts</a>
                  </li>
                  <li class="filter-item"><a href="#" class="filter-link">Jackets & Coats</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Polos</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Shirts</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Shoes</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Sweaters & Knits</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">T-Shirts</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Tanks</a></li>
                </ul>
              </details>
              <details class="filter-title" open>
                <summary class="filter-title-name">BRAND</summary>
                <ul class="filter-list">
                  <li class="filter-item"><a href="#" class="filter-link">Reebook</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Addidas</a></li>
                  <li class="filter-item"><a href="#" class="filter-link">Puma</a></li>
                </ul>
              </details>
              <details class="filter-title">
                <summary class="filter-title-name">DESIGNER</summary>
              </details>
            </div>
          </details>
          <div class="sort">
            <details class="sort-title">
              <summary class="sort-name">TRENDING NOW<span class="sort-name--icon"><i
                class="fas fa-chevron-down"></i></span></summary>
              <div class="sort-wrap">
                <ul class="sort-list sort-list-trend">
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Hoodies
                                                                                               Under
                                                                                               Blazers
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Power
                                                                                               Bohemian
                                                                                               Florals
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Color
                                                                                               Clashing
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Tractor
                                                                                               Trek-Sole
                                                                                               Boots
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Chunky
                                                                                               Loafers
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Academia
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Hot
                                                                                               Goth
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Y2K
                                                                                               Fashion
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Wide
                                                                                               Leg
                                                                                               Pants
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="trend">Loud
                                                                                               Logos
                  </li>
                </ul>
              </div>
            </details>
            <details class="sort-title">
              <summary class="sort-name">SIZE<span class="sort-name--icon"><i
                class="fas fa-chevron-down"></i></span></summary>
              <div class="sort-wrap">
                <ul class="sort-list">
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="size">XS</li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="size">S</li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="size">M</li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="size">L</li>
                </ul>
              </div>
            </details>
            <details class="sort-title">
              <summary class="sort-name">PRICE<span class="sort-name--icon"><i
                class="fas fa-chevron-down"></i></span></summary>
              <div class="sort-wrap">
                <ul class="sort-list sort-list-price">
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="price">0-99
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="price">100-299
                  </li>
                  <li class="sort-item"><input class="sort-input" type="checkbox" name="price">300-499
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </section>
        <ul class="product-list">
          <card v-for="item of catalog" v-bind:key="item.id" v-bind:data="item">
          </card>
        </ul>
        <nav class="pagination">
          <ul class="pagination-list">
            <li class="pagination-item">
              <button class="pagination-btn pagination-btn--prev">
                <i class="fas fa-angle-left"></i>
              </button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn pagination-btn--current">1</button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn">2</button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn">3</button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn">4</button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn">5</button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn">6</button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn pagination-item--separator">.....</button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn">20</button>
            </li>
            <li class="pagination-item">
              <button class="pagination-btn pagination-btn--next">
                <i class="fas fa-angle-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import "../assets/style/blocks/_pagination.scss";
import Card from "@/components/Card";
import InnerTitle from "@/components/InnerTitle";

export default {
  name: "Catalog",
  components: {
    InnerTitle,
    Card
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    }
  }
};
</script>
