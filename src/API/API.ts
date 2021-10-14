import {UserDataType} from "../Components/redux/app-reducer";

export type ProfileType = {
    status: number
    userData: UserDataType
}
export const api = {

    getProfile() {

        return new Promise(function (resolve) {
            return setTimeout(() => {
                const profile:ProfileType = {
                    status: 200,
                    userData: {
                        email: "steve.jobs@example.com",
                        password: "password"
                    }
                }
                resolve(profile)
            }, 3000)
        }).then(profile => {
            return profile
        })

    }

}