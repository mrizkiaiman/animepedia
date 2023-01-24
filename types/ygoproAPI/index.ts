export interface YGOCard {
  id: string
  name: string
  type: string
  frameType: string
  desc: string
  atk: number
  race: string
  attribute: string
  archetype: string
  linkval: number
  linkmarkers: string[]
  card_sets: Array<{ set_name: string; set_code: string; set_rarity: string; set_rarity_code: string; set_price: string }>
  card_images: [
    {
      id: number
      image_url: string
      image_url_small: string
      image_url_cropped: string
    },
  ]
  card_prices: Array<{
    cardmarket_price: string
    tcgplayer_price: string
    ebay_price: string
    amazon_price: string
    coolstuffinc_price: string
  }>
}
