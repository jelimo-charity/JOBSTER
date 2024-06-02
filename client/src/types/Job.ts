export interface Job {
    id: string;
    position: string;
    company: string;
    jobLocation: string;
    status: 'pending' | 'interview' | 'declined';
    jobType: 'full-time' | 'part-time' |'remote' | 'internship';
}