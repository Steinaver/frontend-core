let profileId = '';

describe('Navigate to the profile page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Profile loaded successfully', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });

    it('Edit profile', () => {
        const newFirstname = 'new';
        const newLastname = 'lastname';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
