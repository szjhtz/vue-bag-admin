import { post } from '@/bag-web/http/request'
import { aes_decrypt, aes_encrypt } from '@www/blog/utils/crypto'
import { nanoid } from 'nanoid'

const v1IndexArticle = () => {
    const vipbic = 'vipbic'
    const version = '1'
    const sign = aes_encrypt(`version=1&vipbic=vipbic&time=${nanoid()}`)
    return post('v1/index/article?page=1', {}, { baseURL: '/vip', headers: { vipbic, version, sign } })
        .then((res: any) => {
            return Promise.resolve(JSON.parse(aes_decrypt(res)))
        })
}
export {
    v1IndexArticle,
}
