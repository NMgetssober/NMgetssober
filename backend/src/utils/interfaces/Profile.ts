export interface Profile {
    profileId: string|null,
    profileAuthenticationKey: string|null,
    profileEmail: string,
    profilePassword: string,
    profileUsername: string,

}

export interface PartialProfile {
    profileId: string|null,
    profileUsername: string,
}