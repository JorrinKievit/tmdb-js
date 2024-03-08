export interface CertificationsGetMovieCertificationResponse {
    certifications: Certifications;
}

export interface CertificationsGetTVCertificationResponse {
    certifications: Certifications;
}

export interface Certifications {
    [key: string]: Certification[];
}

export interface Certification {
    certification: string;
    meaning: string;
    order: number;
}
