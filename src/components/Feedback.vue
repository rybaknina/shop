<template>
  <section class="feedback">
    <div class="container">
      <h2 class="hidden">Feedback block</h2>
      <div class="feedback-wrap">
        <div class="feedback-left">
          <img src="../assets/img/subscriber.png" alt="subscriber">
          <p class="feedback-message">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span class="feedback-emphasize">a pulvinar purus condimentum</span>“
          </p>
        </div>
        <div class="feedback-right">
          <h3 class="subscribe-title">
            SUBSCRIBE
          </h3>
          <p class="subscribe-description">
            FOR OUR NEWSLETTER AND PROMOTION
          </p>
          <form class="subscribe-block" action="#">
            <input type="email" class="input-email" placeholder="Enter Your Email" required>
            <button class="subscribe-btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Feedback"
};
</script>
