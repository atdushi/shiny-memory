Вначале устанавливаем все пакеты
```
npm install
```

Затем в **hardhat.config.js** нужно прописать "INFURA SEPOLIA HTTPS END POINT" и "METAMASK PRIVATE KEY". Вместо Infura я использую Alchemy

```
const HTTPS_ENDPOINT = "https://eth-sepolia.g.alchemy.com/v2/{Мой API Key}"
const PRIVATE_KEY = "{Мой MetaMask private key}"

```

После этого компилируем
```
npx hardhat compile
```


