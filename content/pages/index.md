---
layout: home
title: Home
white_header: true
sections:
  - type: hero_section
    section_id: hero_section
    background_image: images/hero-bg.jpg
    background_image_opacity: 65
    content: >
      # TESTE


      Don't forget to add your Snipcart API key to the site's configuration to
      enable Cart actions.
    actions:
      - title: See all items
        url: /store
        arrow: true
        style: primary
  - type: featured_products_section
    section_id: best_sellers_section
    title: Best sellers
    icon: true
    light_title: true
    featured_products:
      - content/pages/products/plant1.md
      - content/pages/products/plant3.md
      - content/pages/products/plant5.md
      - content/pages/products/plant7.md
  - type: featured_categories_section
    section_id: featured_categories_section
    featured_categories:
      - content/pages/category/bigplants.md
      - content/pages/category/cactuses.md
  - type: testimonials_section
    section_id: testimonials_section
    title: Testimonials
    testimonials:
      - author:
          name: xxxx xxxxx
          location: Proverbes anglais
        text: 'Ne cherche point par la force, ce que tu peux obtenir de bon gré.'
      - author:
          name: Jean-Louis
          location: dit abbé Aubert
        text: Bon coeur peut quelquefois tenir lieu de bon sens.
  - type: promotion_section
    section_id: promotion_section
    title: des produits en abondance
    subtitle: rien que pour vous
    image: images/cta-bg.jpg
    background_image: images/leaf.svg
    cta:
      title: Découvrir
      url: /store
      style: secondary
      arrow: true
seo:
  title: Réaumur-Buron 
  description: The preview of the Réaumur-Buron 
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Réaumur-Buron 
      keyName: property
    - name: 'og:description'
      value: The preview of the Réaumur-Buron 
      keyName: property
    - name: 'og:image'
      value: images/header.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Réaumur-Buron 
    - name: 'twitter:description'
      value: The preview of the Réaumur-Buron 
    - name: 'twitter:image'
      value: images/header.jpg
      relativeUrl: true
---
