require "application_system_test_case"

class PaymentsTest < ApplicationSystemTestCase
  setup do
    @payment = payments(:one)
  end

  test "visiting the index" do
    visit payments_url
    assert_selector "h1", text: "Payments"
  end

  test "creating a Payment" do
    visit payments_url
    click_on "New Payment"

    fill_in "Address", with: @payment.address
    fill_in "First name", with: @payment.first_name
    fill_in "Last name", with: @payment.last_name
    fill_in "Money paid", with: @payment.money_paid
    fill_in "Nin number", with: @payment.nin_number
    fill_in "Period", with: @payment.period
    fill_in "Phone number", with: @payment.phone_number
    click_on "Create Payment"

    assert_text "Payment was successfully created"
    click_on "Back"
  end

  test "updating a Payment" do
    visit payments_url
    click_on "Edit", match: :first

    fill_in "Address", with: @payment.address
    fill_in "First name", with: @payment.first_name
    fill_in "Last name", with: @payment.last_name
    fill_in "Money paid", with: @payment.money_paid
    fill_in "Nin number", with: @payment.nin_number
    fill_in "Period", with: @payment.period
    fill_in "Phone number", with: @payment.phone_number
    click_on "Update Payment"

    assert_text "Payment was successfully updated"
    click_on "Back"
  end

  test "destroying a Payment" do
    visit payments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Payment was successfully destroyed"
  end
end
