import OpenAI from 'openai'

const openaiApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY

// API anahtarını kontrol et
if (!openaiApiKey) {
  console.error('OpenAI API Key bulunamadı. Lütfen .env.local dosyasını kontrol edin.')
  throw new Error('OpenAI API Key tanımlanmalıdır')
}

// OpenAI istemcisini oluştur
export const openai = new OpenAI({
  apiKey: openaiApiKey,
  dangerouslyAllowBrowser: true // Tarayıcıda çalışması için
})

// API'nin çalışıp çalışmadığını kontrol et
export const checkOpenAI = async () => {
  try {
    await openai.models.list()
    return true
  } catch (error) {
    console.error('OpenAI bağlantı hatası:', error)
    return false
  }
} 